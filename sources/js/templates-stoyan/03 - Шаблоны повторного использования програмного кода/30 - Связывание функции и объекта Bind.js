var one = {
	name: 'object',
	say:function(greet){
		return greet + ', ' + this.name;
	}
}


// в случае присваивания функции переменной
// ссылка `this` будет указывать на глобальный объект
var say = one.say;
console.log(say('hoho'));


// передача в виде функции обратного вызова
var yetanother = {
	name: 'Yet another object',
	method: function(callback){
		return callback('Hola!');
	}
};


//Данная функция bind() принимает объект o и метод m, связывает их
// вместе и возвращает другую функцию. Возвращаемая функция имеет
// доступ к ссылкам o и m через замыкание. То есть даже после выхода из
// функции bind() внутренняя функция будет иметь доступ к ссылкам o
// и m, которые всегда будут указывать на оригинальный объект и метод.
// Создадим новую функцию с помощью bind():
function bind(o, m){
	return function(){
		return m.apply(o, [].slice.call(arguments));
	}
}

console.log(yetanother.method(one.say));

var twosay = bind(yetanother, one.say);
console.log(twosay('YO!'))