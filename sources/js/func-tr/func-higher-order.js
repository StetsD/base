//Функции высш. порядка

// function max(arr){
// 	return Math.max.apply(Math, arr);
// }
//
// console.log(max([1, 200, 2]));


function finder(valueFun, bestFun, coll){
	return coll.reduce(function(best, current){
		var bestValue = valueFun(best);
		var currentValue = valueFun(current);

		return (bestValue === bestFun(bestValue, currentValue)) ? best : current;
	});
}

function identity(value){
	return value;
}

console.log(finder(identity, Math.max, [1,2,3,4,5]));


var people = [
	{name: 'Fred', age: 65},
	{name: 'Lucy', age: 34},
	{name: 'Linda', age: 33}
];

function plucker(FIELD){
	return function(obj){
		return (obj && obj[FIELD]);
	}
}

console.log(finder(plucker('age'), Math.max, people));


var first = finder(plucker('name'), function(x, y){
	return (x.charAt(0) === 'L') ? x : y;
}, people);
console.log(first)
