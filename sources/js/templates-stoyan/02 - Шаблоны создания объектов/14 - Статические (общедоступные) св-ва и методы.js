// конструктор
var Gadget = function () {};

// статический метод
Gadget.isShiny = function () {
	return "you bet";
};

// обычный метод, добавляемый в прототип
Gadget.prototype.setPrice = function (price) {
	this.price = price;
};

// вызов статического метода
console.log(Gadget.isShiny()); // “you bet”

// создать экземпляр и вызвать обычный метод
var iphone = new Gadget();
iphone.setPrice(500);

console.log(typeof Gadget.setPrice); // “undefined”
console.log(typeof iphone.isShiny); // “undefined”


// Однако иногда бывает удобно иметь возможность вызывать статические
// методы и относительно экземпляров. Это легко можно реализовать, до-
// бавив в прототип новый метод, который будет играть роль ссылки, ука-
// зывающей на фактический статический метод:
Gadget.prototype.isShiny = function(){
	return Gadget.isShiny.call(this)
};
console.log(iphone.isShiny()); // “you bet”