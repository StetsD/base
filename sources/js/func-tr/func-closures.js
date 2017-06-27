//замык

function createScaleFunction(FACTOR){
	return function(v){
		return v.map(function(n){
			return (n * FACTOR);
		});
	}
}

var scale10 = createScaleFunction(10);
console.log(scale10([1,2,3]));

//Free variable
function makeAdder(CAPTURED){
	return function(free){
		return free + CAPTURED;
	}
}

var add10 = makeAdder(10);
console.log(add10(32));



function average(){
	return Array().reduce.call(arguments, (current, next) => current + next, 0) / arguments.length;
}

function averageDamp(FUN){
	return function(n){
		return average(n, FUN(n));
	}
}

var averageSq = averageDamp(function(n){
	return n * n;
})

console.log(averageSq(10));
