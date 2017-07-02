var MYAPP = MYAPP || {};

MYAPP.namespace = function(stringMethod){
	var parent = MYAPP,
		parts = stringMethod.split('.'),
		i;

	if(parts[0] == 'MYAPP'){
		parts = parts.slice(1);
	}

	for(i = 0; i < parts.length; i++){
		if(typeof parent[parts[i]] === 'undefined'){
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}

	return parent;
}

//Немедленно вызываемая функция, оберты-
//вающая модуль, возвращает функцию, а не объект


// Первый шаг заключается в создании пространства имен.
MYAPP.namespace('MYAPP.utilities.Array');

//Следующий шаг – определение модуля. На этом этапе используется не-
// медленно вызываемая функция, образующая частную область видимо-
// сти, если это необходимо.
MYAPP.utilities.Array = (function(){
	//Частные Свойста
	var Constr;

	//Общедоступные методы -- конструктор
	Constr = function(o){
		this.elements = this.toArray(o);
	};

	//Общедоступные методы -- прототип
	Constr.prototype = {
		constructor: MYAPP.utilities.Array,
		version: "2.0",
		toArray: function(obj){
			for(var i = 0, a = [], len = obj.length; i < len; i++){
				a[i] = obj[i];
			}
			return a;
		}
	};

	//Вернуть конструктор, создающий новое пространтсво имен
	return Constr;
}());

var obj = [1,3,4,5,23,525,2];

var arr = new MYAPP.utilities.Array(obj);

console.log(arr);