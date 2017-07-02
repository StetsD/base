function karr2(fn){
	var slice = Array.prototype.slice,
		oldArgs = slice.call(arguments, 1);
	return function(){
		var newArgs = slice.call(arguments),
			args = oldArgs.concat(newArgs);
		return fn.apply(null, args);
	}
}

function plus(x, y){
	return x + y;
}

//Сохраняем в памяти
var newAdd = karr2(plus, 5);
console.log(newAdd(7));

//Мгновенное выполнение без сохранения в памяти
console.log(karr2(plus, 5)(5))