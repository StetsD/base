//ф-ия апплекатив

var arr = [1,2,3,4,5];

function greaterThen(x,y){
	return x > y;
}

function complement(prod){
	if(prod){
		return prod;
	}
}

var filter02 = arr.filter(item => complement(greaterThen(item, 3)));

console.log(filter02);
