function Universe(){

	//Сохраннёный экземпляр
	var instance;

	//Переопределить конструктор
	Universe = function Universe(){
		return instance;
	}

	//Перенести свойста прототипа
	Universe.prototype = this;

	//Создать экземпляр
	instance = new Universe();

	//Переустановить указатель на конструктор
	instance.constructor = Universe;


	//Добавить остальную функциональность
	this.start_time = 0;
	this.bang = 'Big';

	return instance;
}

Universe.prototype.nothing = true;

var uni = new Universe();

Universe.prototype.anything = true;

var uni2 = new Universe();

console.log(uni.nothing); //true
console.log(uni2.nothing); //true
console.log(uni.anything); //undefined
console.log(uni2.anything); //undefined

console.log(uni.constructor.name); //Universe
console.log(uni.constructor == Universe); //false

// Причина, по которой ссылка uni.constructor больше не указывает на
// конструктор Universe(), состоит в том, что она по-прежнему указывает
// на оригинальный конструктор, а не на переопределенный.