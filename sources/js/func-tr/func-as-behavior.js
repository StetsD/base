//ф-ия как описание поведения

var arr = ['a', 'b', 'c'];

function fail(thing){
	throw new Error(thing)
}

function isNumber(num){
    return !isNaN(+num) && (typeof +num === 'number');
}

function isIndexed(arr){
    return Array.isArray(arr) || (typeof arr === 'string');
}

function isOutOfRange(arr, index){
    return index < 0 || index >= arr.length;
}


function getNth(a, index){
    if(!isNumber(index)) fail('Expected a number as the index');
    if(!isIndexed(a)) fail('Not supported on non-indexed type');
    if(isOutOfRange(a, index)) fail('Index value is out of bounds');
    return a[index];
}

export default getNth;
