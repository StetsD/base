//CLASS
var Class = function(parent){
	var klass = function(){
		this.init.apply(this, arguments);
	}

	if(parent){
		var subclass = function(){};
		subclass.prototype = parent.prototype;
		klass.prototype = new subclass;
	};

	klass.prototype.init = function(){};

	//Сокращённая форма записи для доступа к проту
	klass.fn = klass.prototype;
	//Другая форма записи для доступа к классу
	klass.fn.parent = klass;
	klass._super = klass.__proto__;

	klass.proxy = function(func){
		var self = this;
		return function(){
			func.apply(self, arguments);
		}
	}
	klass.fn.proxy = klass.proxy;

	//Добавление свойств класса
	klass.extend = function(obj){
		var extended = obj.extended;
		for(var i in obj){
			klass[i] = obj[i];
		}
		if(extended) extended(klass)
	};

	//Добавление свойств экземпляров
	klass.include = function(obj){
		var included = obj.included;
		for(var i in obj){
			klass.fn[i] = obj[i];
		}
		if(included) included(klass)
	};

	return klass;
};








//MODEL
var Model = {
	inherited: function(){},
	created: function(){
		this.records = {};
		this.attributes = [];
	},

	prototype: {
		init: function(obj){
			if(obj){
				for(var i in obj){
					this[i] = obj[i];
				}
			}
		}
	},

	create: function(){
		var object = Object.create(this);
		object.parent = this;
		object.prototype = object.fn = Object.create(this.prototype);
		object.created();
		object.inherited(object);
		return object;
	},

	init: function(){
		var instance = Object.create(this.prototype);
		instance.parent = this;
		instance.init.apply(instance, arguments);
		return instance;
	},

	extend: function(o){
		var extended = o.extended;
		$.extend(this, o);
		if(extended) extended(this);
	},

	include: function(o){
		var included = o.included;
		$.extend(this.prototype, o);
		if(included) included(this);
	}
};

Model.include({
	attributes: function(){
		var result = {};
		for(var i in this.parent.attributes){
			var attr = this.parent.attributes[i];
			if(this[attr]) {result[attr] = this[attr]};
		}
		result.id = this.id;
		return result;
	},
	toJSON: function(){
		return (this.attributes());
	},
	createRemote: function(url, callback){
		$.post(url, this.attributes(), callback);
	},
	updateRemote: function(url, callback){
		$.ajax({
			url: url,
			data: this.attributes(),
			success: callback,
			type: 'PUT'
		});
	}
});


var Asset = Model.create();
console.log(Asset)

//Добавление свойств объекта
Asset.extend({
	find: function(id){
		var record = this.records[id];
		if(!record) throw('Неизвестная запись');
		return record.dup();
	}
});

//Добавление свойств экземпляра
Asset.include({
	newRecord: true,

	create: function(){
		if(!this.id) this.id = Math.random().toString(36).substr(2,25).toUpperCase();
		this.newRecord = false;
		this.parent.records[this.id] = this;
	},

	destroy: function(){
		delete this.parent.records[this.id];
	},

	update: function(){
		this.parent.records[this.id] = this;
	},

	save: function(){
		this.newRecord ? this.create() : this.update();
	},

	dup: function(){
		return $.extend(true, {}, this);
	}
});

$.getJSON('data/assets.json', function(result){
	Asset.populate(result);
});


Asset.extend({
	populate: function(values){
		// Перезапуск model и records
		this.records = {};
		for (var i=0, il = values.length; i < il; i++) {
			var record = this.init(values[i]);
			record.newRecord = false;
			this.records[record.id] = record;
		}
	}
});

Asset.attributes = ['name', 'tel'];


var asset = Asset.init({
	name: 'varavaika',
	tel: 908098666,
	id: 4
});
asset.save();

console.log(asset)

Model.LocalStorage = {
	saveLocal: function(name){
		var result = [];
		for(var i in this.records){
			result.push(this.records[i])
		}
		localStorage[name] = JSON.stringify(result);
	},
	loadLocal: function(name){
		var result = JSON.parse(localStorage[name]);
		this.populate(result);
	}
};

Asset.extend(Model.LocalStorage);

setTimeout(function(){
	Asset.loadLocal('Asset');
	// console.log(Asset.records)
}, 1000);

window.onbeforeunload = function(){
	Asset.saveLocal('Asset');
}












//CONTROLLERS

var exports = this;

+(function($){
	var mod = {};

	mod.create = function(includes){
		var result = function(){
			this.init.apply(this, arguments);
		};

		result.fn = result.prototype;
		result.fn.init = function(){};

		result.proxy = function(func){return $.proxy(func, this);};
		result.fn.proxy = result.proxy;

		result.include = function(ob){$.extend(this.fn, ob)};
		result.extend = function(ob){$.extend(this, ob);};
		if(includes){result.include(includes)}

		return result;
	};

	exports.Controller = mod;
})(jQuery);


$(function($){
	exports.SearchView = Controller.create({
		elements: {
			'input[type=search]': 'searchInput',
			'form': 'searchForm'
		},

		events: {
			'submit form': 'search'
		},

		init: function(element){
			this.el = $(element);
			this.refreshElements();
			this.delegateEvents();
			this.searchForm.submit(this.search.bind(this));
		},

		search: function(){
			console.log('Searching:', this.searchInput.val());
		},

		$: function(selector){
			return $(selector, this.el);
		},

		eventSplitter: /^(\w+)\s*(.*)$/,

		delegateEvents: function(){
			for(var key in this.events){
				var methodName = this.events[key];
				var method = this.proxy(this[methodName]);

				var match = key.match(this.eventSplitter);
				var eventName = match[1],
					selector = match[2];

				if(selector === ''){
					this.el.bind(eventName, method);
				}else{
					this.el.on(selector, eventName, method)
				}
			}
		},

		refreshElements: function(){
			for(var key in this.elements){
				this[this.elements[key]] = this.$(key);
			}
		}
	});

});


$(function($){
	var ToggleView = Controller.create({
		init: function(view){
			this.view = $(view);
			this.view.mouseover(this.toggleClass.bind(this));
			this.view.mouseout(this.toggleClass.bind(this));
		},

		toggleClass: function(e){
			this.view.toggleClass('over', e.data);
		}
	});

	new ToggleView('.clicky');
});

//StateMachine
var Events = {
	bind: function(){
		if(!this.o) this.o = $({});
		this.o.bind.apply(this.o, arguments);
	},
	trigger: function(){
		if(!this.o) this.o = $({});
		this.o.trigger.apply(this.o, arguments);
	}
}

var StateMachine = function(){};
StateMachine.fn = StateMachine.prototype;
$.extend(StateMachine.fn, Events);

StateMachine.fn.add = function(controller){
	this.bind('change', function(e, current){
		if(controller == current)
			controller.activate();
		else
			controller.deactivate();
	});

	controller.active = $.proxy(function(){
		this.trigger('change', controller)
	}, this);
}

var con1 = {
	activate: function(){
		$('.clicky').addClass('active');
	},
	deactivate: function(){
		$('clicky').removeClass('active');
	}
};
var con2 = {
	activate: function(){
		$('body').addClass('active');
	},
	deactivate: function(){
		$('body').removeClass('active')
	}
};

var sm = new StateMachine;
sm.add(con1);
sm.add(con2);

con1.active();

$(window).bind('popstate', function(e){
	event = event.originalEvent;
	if(event.state){
		console.log(event.state)
	}
})






//PATTERNS OF PROG

//Decorator
function Ball( param ){
	this._radius = param.radius;
	this._color = param.color;
}
Ball.prototype = {
	constructor: Ball,

	INCREMENTATION_STEP: 5,

	draw: function(){console.log("ball drawn with radius:" + this._radius + " and color: " + this._color)},
	inc: function(){ this._radius += this.INCREMENTATION_STEP }
}


function StripedBall(ball){
	this._ball = ball;
}
StripedBall.prototype = {
	constructor: StripedBall,
	draw: function(){
		this._ball.draw();
		console.log('and with stripes');
	},
	inc: function(){
		return this._ball.inc();
	}
}

function SpeckledBall(ball){
	this._ball = ball;
}
SpeckledBall.prototype = {
	constructor: SpeckledBall,
	draw: function(){
		this._ball.draw();
		console.log('and with dots!');
	},
	inc: function(){
		return this._ball.inc();
	}
}

var ball1 = new SpeckledBall(new Ball({radius:100, color:'red'}));
var ball2 = new StripedBall(new SpeckledBall(new Ball({radius:100, color:'green'})));
// ball1.draw();
// ball1.inc();
// ball1.draw();
// ball2.draw();
// console.log(ball1)
// console.log(ball2)

//-Lite example
function MakeStripedBall(ball){
	var function_name = 'draw';
	var prev_func = ball[function_name];

	ball[function_name] = function(){
		prev_func.apply(this, arguments)
		console.log('and with stripes');
	};
	return ball;
}

function MakeSpeckledBall(ball){
	var function_name = 'draw';
	var prev_func = ball[function_name];

	ball[function_name] = function(){
		prev_func.apply(this, arguments);
		console.log('and with dots!');
	}
	return ball;
}

var ball11 = new MakeStripedBall(new Ball({radius:150, color:'blue'}));
var ball22 = new MakeSpeckledBall(new Ball({radius:150, color:'black'}));
// console.log(ball11);
// console.log(ball22);
// ball11.draw();
// ball22.draw();




//Factory
var Shapes =
{
	Circle: function (param)
	{
		console.log("new " + param.color + " circle created with radius " + param.radius + "px");
	},
	Square: function (param)
	{
		console.log("new " + param.color + " square created with " + param.side + "px on a side ");
	},
	Triangle: function (param)
	{
		console.log("new " + param.color + " triangle created with " + param.side + "px on a side ");
	}
}

function ShapeFactory(size, color){
	this.size = size;
	this.color = color;
}

ShapeFactory.prototype = {
	constructor: ShapeFactory,

	makeCircle: function(){
		return new Shapes.Circle({radius: this.size/2, color:this.color});
	},
	makeSquare: function(){
		return new Shapes.Square({side: this.size, color:this.color});
	},
	makeTriangle: function(){
		return new Shapes.Triangle({side: this.size, color:this.color})
	}
}

var factory = new ShapeFactory(100, 'red');
// factory.makeSquare();
// factory.makeTriangle();
// factory.makeCircle();



//Singleton
var Singleton_B;
(function(){
	var instance,
		anticlone_proxy;

	Singleton_B = function(){
		if(instance){return instance}

		instance = {
			_counter: 0,
			log: function(text){
				this._counter++;
				console.log(text + ' ' + this._counter);
			}
		}

		anticlone_proxy = {
			log: function(text){
				return instance.log(text);
			}
		}

		return anticlone_proxy;
	}
})();

function NonSingleton(){}

NonSingleton.prototype = {
	constructor: NonSingleton,
	scream: function(){console.log('Woooohooooo!')}
}

var singleton = new Singleton_B();
var nonsingleton = new NonSingleton();

// singleton.log('3..2..1.. ignition!');
// nonsingleton.scream();


//Memoization
function calculation(x, y)
{
	var key = x.toString() + "|" + y.toString();
	var result = 0;

	if (!calculation.memento[key])
	{
		for (var i = 0; i < y; ++i) result += x;
		calculation.memento[key] = result;
	}
	return calculation.memento[key];
}
calculation.memento = {};

// console.time();
// console.log('result: ' + calculation(2, 10000000));
// console.timeEnd();

// console.time();
// console.log('result: ' + calculation(2, 10000000));
// console.timeEnd();

// console.time();
// console.log('result: ' + calculation(2, 10000000));
// console.timeEnd();



//Mediator
//daddy
function Daddy() { }
Daddy.prototype =
{
	constructor: Daddy,

	getBeer: function ()
	{
		if (!kitchen.tryToGetBeer())
		{
			console.log("Daddy: Who the hell drank all my beer?");
			return false;
		}

		console.log("Daddy: Yeeah! My beer!");
		kitchen.oneBeerHasGone();
		return true;
	},
	argue_back: function () { console.log("Daddy: it's my last beer, for shure!"); }
}

//mammy
function Mammy() { }
Mammy.prototype =
{
	constructor: Mammy,

	argue: function ()
	{
		console.log("Mammy: You are f*king alconaut!");
		kitchen.disputeStarted();
	}
}

//beerStorage
function BeerStorage(beer_bottle_count)
{
	this._beer_bottle_count = beer_bottle_count;
}
BeerStorage.prototype =
{
	constructor: BeerStorage,

	takeOneBeerAway: function ()
	{
		if (this._beer_bottle_count == 0) return false;
		this._beer_bottle_count--;
		return true;
	}
}

//mediator
var kitchen = {
	daddy: new Daddy(),
	mammy: new Mammy(),
	refrigerator: new BeerStorage(3),
	stash: new BeerStorage(2),

	tryToGetBeer: function(){
		if(this.refrigerator.takeOneBeerAway()) return true;
		if(this.stash.takeOneBeerAway()) return true;

		return false;
	},

	oneBeerHasGone: function(){this.mammy.argue();},
	disputeStarted: function(){this.daddy.argue_back();}
}

var round_counter = 0;
while(kitchen.daddy.getBeer()){
	round_counter++;
	// console.log(round_counter + ' round passed');
}
