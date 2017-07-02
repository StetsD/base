var Universe;

(function(){
	var instance;

	Universe = function Universe(){
		if(instance){
			return instance;
		}

		instance = this;

		this.start_time = 0;
		this.bang = 'true'
	}
}());

Universe.prototype.nothing = true;

var uni = new Universe();

Universe.prototype.anything = true;

var uni2 = new Universe();

console.log(uni.nothing);
console.log(uni2.nothing);
console.log(uni.anything);
console.log(uni2.anything);

console.log(uni.constructor.name);
console.log(uni.constructor == Universe);

// Другой вариант решения проблемы заключается в обертывании кон-
// структора и ссылки на экземпляр немедленно вызываемой функцией.
// При первом обращении конструктор создаст объект и сохранит ссылку
// на него в частной переменной instance. При повторных обращениях кон-
// структор будет просто возвращать значение частной переменной. Все
// проверки, проведенные в предыдущем фрагменте, будут возвращать
// ожидаемые результаты и для новой реализации: