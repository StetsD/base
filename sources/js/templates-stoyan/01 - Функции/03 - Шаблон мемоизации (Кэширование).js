var myFunc = function(param){
	if(!myFunc.cache[param]){
		var result = 'This is ' + param;
		myFunc.cache[param] = result;

	}
}

myFunc.cache = {};

myFunc(2);
myFunc(3);
myFunc(5);
myFunc(3);

console.dir(myFunc.cache)