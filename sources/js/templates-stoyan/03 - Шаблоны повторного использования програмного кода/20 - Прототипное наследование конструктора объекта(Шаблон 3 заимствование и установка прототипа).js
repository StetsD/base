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

Child.prototype = new Parent();

var kid = new Child("Patrick");

console.log(kid.name); // “Patrick”
console.log(kid.say()); // “Patrick”

delete kid.name;

console.log(kid.say()); // “Adam”

// В отличие от предыдущего шаблона,
// теперь дочерний объект наследу-
// ет метод say(). Можно также заметить, что свойство name было унасле-
// довано дважды, и после удаления собственной копии дочерний объект
// получает доступ к другому свойству, унаследованному по цепочке про-
// тотипов.