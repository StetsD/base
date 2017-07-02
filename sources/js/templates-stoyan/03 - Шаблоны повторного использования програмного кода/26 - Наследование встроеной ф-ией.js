var parent = {
	name: 'sdf'
}

var child = Object.create(parent,{
	age: {value: 2},
	fuck: {value: 89}
});

console.dir(child)