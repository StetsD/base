function Gadget(){
	//Частный член
	var name = 'iPod';

	//Общедоступное свойство
	this.serial = 'AR120RT0001d';

	//Общедоступная ф-ия
	this.getName = function(){
		return name;
	}
}


//Так как свойство prototype является обычным объектом, его можно
//определить в виде литерала.
//Если метод\свойство одинаковое для всех экземпляров конструктора объекта,
//то его желательно указать в Прототипе, для экономии ресурсов браузера
Gadget.prototype = (function(){
	//Частный член
	var browser = "Mobile Webkit";

	//Общедоступные члены прототипа
	return {
		getBrowser: function(){
			return browser;
		},
		getSerial: function(){
			return this.serial;
		}
	}
}());

var toy = new Gadget();
console.log(toy.getName()); //Собстенный привилегированный метод
console.log(toy.getBrowser()); //Привилигированный метод прототипа 

console.log(toy.getSerial());