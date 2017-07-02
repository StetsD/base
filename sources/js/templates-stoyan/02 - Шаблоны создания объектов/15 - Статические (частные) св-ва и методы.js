var Gadget = (function(){
	//Статическая переменная\св-во
	var counter = 0,
		NewGadget;

	//Реализация нового конструктора
	NewGadget = function(){
		counter++;
	}

	//Привилегированный метод
	NewGadget.prototype.getLastId = function(){
		return counter;
	}

	return NewGadget;
}());


var iphone = new Gadget();
console.log(iphone.getLastId());
var ipod = new Gadget();
console.log(ipod.getLastId());
var ipad = new Gadget();
console.log(ipad.getLastId());