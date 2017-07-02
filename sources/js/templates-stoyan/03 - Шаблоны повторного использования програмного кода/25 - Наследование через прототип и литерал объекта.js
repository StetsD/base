function object(o){
	function F(){};
	F.prototype = o;
	return new F();
}

// родительский конструктор
function Person() {

// “собственное” свойство
this.name = "Adam";
}

// свойство, добавляемое в прототип
Person.prototype.getName = function () {
return this.name;
};

// создать новый объект типа Person
var papa = new Person();

// наследник
var kid = object(papa);

// убедиться, что было унаследовано не только
// свойство прототипа, но и собственное свойство
console.log(kid.getName()); // “Adam”