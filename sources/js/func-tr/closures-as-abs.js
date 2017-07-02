//Замыкания и абстрактные ф-ии

function plucker(FIELD){
	return function(obj){
		return (obj && obj[FIELD]);
	}
}

var best = {title: 'Infine Jest', author: 'DFN'};
var getTitle = plucker('title');
console.log(getTitle(best))


var books = [
	{title: 'Chilton'},
	{stars: 5},
	{title: 'Botchan'}
];

var third = plucker(2);
console.log(third(books));

function filter(array, cond){
	return array.filter(cond);
}

console.log(filter(books, getTitle))
