function add(x, y){
	var oldx = x,
		oldy = y;
	if(typeof y === 'undefined'){
		return function(newy){
			return oldx + newy;
		}
	}
	return x + y;
}

console.log(add(2)(3));

var newAdd = add(500);
console.log(newAdd(10));
console.log(newAdd(15));