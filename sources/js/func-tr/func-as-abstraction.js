//ф-ии как абстракция
function fail(thing){
	throw new Error(thing)
}

function warn(thing){
	if(!window.production){
		console.log(['WARNING:', thing].join(' '));
	}
}

function note(thing){
	if(!window.production){
		console.log(['NOTE:', thing].join(' '));
	}
}



function parseAge(age){
	if(typeof age !== 'string') fail('Expecting a string');

	var a;

	note('Attempting to parse an age');
	a = parseInt(age, 10);

	if(isNaN(a)){
		warn(['Could not parse age:', age].join(' '));
		a = 0;
	}

	return a;
}

export default {
	parseAge: parseAge
}
