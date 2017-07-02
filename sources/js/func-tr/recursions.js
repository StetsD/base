//рекурс
function range(length){
	var index = -1,
	result = Array(length);
	while(++index < length) result[index] = index;
	return result;
}
function getRest(arrOrString){
    return toArray(arrOrString).slice(1);
}
function getFirst(arrOrString){
    return toArray(arrOrString).slice(0);
}
function toArray(arr){
	return (
		(Array.isArray(arr) && arr)
		|| (!Array.isArray(arr) && arr.length && [].slice.call(arr))
		|| (typeof arr === 'string' && arr.split(''))
		|| (typeof arr === 'object' && [])
	)
}

function getLength(arr){
    return arr.length ? 1 + getLength(arr.splice(1)) : 0;
}

console.log(getLength(range(10)));

var influence = [
	['Lisp', 'Smalltalk'],
	['Lisp', 'Scheme'],
	['Smalltalk', 'Self'],
	['Scheme', 'Javascript'],
	['Scheme', 'Lua'],
	['Self', 'Lua'],
	['Self', 'Javascript']
];

function nexts(graph, node){
	if(!graph.length) return [];

	var pair = getFirst(graph),
		from = getFirst(pair),
		to = getRest(pair),
		more = getRest(graph);

	return node === from ? construct(to, nexts(more, node)) : nexts(more, node);
}

console.log(nexts(influence, 'Lisp'));
