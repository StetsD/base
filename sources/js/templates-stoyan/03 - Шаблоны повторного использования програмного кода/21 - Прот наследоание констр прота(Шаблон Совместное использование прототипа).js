// родительский конструктор
function Parent(name) {
	this.name = name || "Adam";
}

// добавление дополнительной функциональности в прототип
Parent.prototype.say = function () {
	return this.name;
};

// дочерний конструктор
function Child(name) {
	Parent.apply(this, arguments);
}



// При таком способе наследования доступ к повторно используемым
// членам обеспечивается прототипом, а не ссылкой this. То есть все, что
// должно наследоваться дочерними объектами, должно находиться в ро-
// дительском прототипе. В этом случае достаточно просто присвоить ро-
// дительский прототип дочернему прототипу:
Child.prototype = Parent.prototype;

var kid = new Child("Patrick");

console.log(kid.name); // “Patrick”
console.log(kid.say()); // “Patrick”

delete kid.name;

console.log(kid.say()); // “Adam”