var MYAPP = {
	modules: {
		myModule1:{
			
		}
	}
}

MYAPP = MYAPP || {};

MYAPP.namespace = function(stringMethod){
	var parent = MYAPP,
		parts = stringMethod.split('.'),
		i;

	if(parts[0] == 'MYAPP'){
		parts = parts.slice(1);
	}

	for(i = 0; i < parts.length; i++){
		if(typeof parent[parts[i]] === 'undefined'){
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}

	return parent;
}


var module2 = MYAPP.namespace('MYAPP.modules.myModule2');

console.log(MYAPP)