var scareMe = function(){
	console.log("Boo!");
	return function(){
		console.log("Double Boo!");
	}
}


//-------------------------------------------------
scareMe.propepty = 'properly';

var prank = scareMe;

var spooky = {
	boo:scareMe
}

// вызов под новым именем
prank(); // “Boo!”
prank(); // “Boo!”
console.log(prank.property); // “properly”
// вызов как метода
spooky.boo(); // “Boo!”
spooky.boo(); // “Boo!”
console.log(spooky.boo.property); // “properly”
// использование самоопределяемой функции
scareMe(); // Double boo!
scareMe(); // Double boo!
console.log(scareMe.property); // undefined


