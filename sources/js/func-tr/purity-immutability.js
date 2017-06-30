//чистые ф-ии
function toArray(arr){
	return (
		(Array.isArray(arr) && arr)
		|| (!Array.isArray(arr) && arr.length && [].slice.call(arr))
		|| (typeof arr === 'string' && arr.split(''))
		|| (typeof arr === 'object' && [])
	)
}
function partial(fun, arg1){
	return function(){
		var args = args.concat(toArray(arguments));
		return fun.apply(fun, args);
	}
}

function take(array, n){
	n = n || 1;
	var length = array ? array.length : 0;
	if(!length) return [];
	return array.slice(0, n < 0 ? 0 : n);
}

function random(min, max){
	return Math.floor(Math.random() * ((max || 0) - (min || 0) + 1) + min);
}

var rand = partial(random, 1);

take(repeatedly(100, partial(rand, 10)), 5);

function randString(len){
	var ascii = repeatedly(len, partial(rand, 26));

	return ascii.map(function(n){
		return n.toString(36);
	}).join('');
}
