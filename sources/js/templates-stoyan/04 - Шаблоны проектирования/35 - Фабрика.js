// Имеется метод, принимающий тип объекта в виде строки и создающий объект
// указанного типа. Нет никаких конструкторов, вызываемых с операто-
// ром new, никаких литералов объектов – только функция, создающая
// объект, опираясь на тип, определяемый строкой.



//Родительский метод
function CarMaker(){}

//Метод предка
CarMaker.prototype.drive = function(){
	return 'Vroom, I have ' + this.doors + " doors";
};

//Статический фабричный метод
CarMaker.factory = function(type){
	var constr = type,
		newcar;

	//Сообщить об ошибке, если конструктор
	//для запрошенного типа отсутствует
	if(typeof CarMaker[constr] !== 'function'){
		throw{
			name: "Error",
			message: constr + " doesn`t exit"
		};
	}

	//В этой точке известно, что требуемый конструктор существует
	//поэтому определим отношения наследования с предком,
	//но только один раз
	if(typeof CarMaker[constr].prototype.drive !== 'function'){
		CarMaker[constr].prototype = new CarMaker();
	}

	//Создать новый экземпляр
	newcar = new CarMaker[constr]();
	//дополнительно можно вызвать какие-либо методы
	//и затем вернуть объект...
	return newcar;
}

CarMaker.Compact = function(){
	this.doors = 4;
};
CarMaker.Convertible = function(){
	this.doors = 2;
};
CarMaker.SUV = function(){
	this.doors = 24;
}




var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');

console.log(corolla.drive());
console.log(solstice.drive());
console.log(cherokee.drive());