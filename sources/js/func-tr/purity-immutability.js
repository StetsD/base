//иммутабельность
function partial(fun, arg1){
	return function(){
		var args = args.concat(toArray(arguments));
		return fun.apply(fun, args);
	}
}
function range(length){
	var index = -1,
	result = Array(length);
	while(++index < length) result[index] = index;
	return result;
}

function skipTake(n, coll){
	var ret = [],
		sz = coll.length;

	for(var index = 0; index < sz; index += n){
		ret.push(coll[index]);
	}

	return ret
}

console.log(skipTake(3, range(20)));

//immutability and Recursions
function summ(array){
	var result = 0;
	var sz = array.length;

	for(var i = 0; i < sz; i++) result += array[i];

	return result;
}
