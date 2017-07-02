//частично применённые ф-ии

function toArray(arr){
	return (
		(Array.isArray(arr) && arr)
		|| (!Array.isArray(arr) && arr.length && [].slice.call(arr))
		|| (typeof arr === 'string' && arr.split(''))
		|| (typeof arr === 'object' && [])
	)
}
function isNumber(num){
	return !isNaN(+num) && (typeof +num === 'number');
}
function getRest(arrOrString){
    return toArray(arrOrString).slice(1);
}
function fail(thing){
	throw new Error(thing)
}

function div(n, d){
	return n / d;
}
function validator(msg, condition){
	if(condition){
		throw Error(msg);
	}

	return true;
}


//----------------------------------------------------------
function partial(fun){
	var pargs = getRest(toArray(arguments));

	return function(){
		var args = pargs.concat(toArray(arguments));
		return fun.apply(fun, args);
	}
}

var over10Part1 = partial(div, 10);
console.log(over10Part1(5));
