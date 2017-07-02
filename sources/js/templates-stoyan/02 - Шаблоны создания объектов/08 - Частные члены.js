function Gadget(){
	//частный член
	var name = 'iPod';

	//Общедоступная ф-ия
	this.getName = function(){
		return name;
	};
}

var toy = new Gadget();

console.log(toy.name);

console.log(toy.getName());