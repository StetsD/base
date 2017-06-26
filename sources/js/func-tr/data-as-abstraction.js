//ф-ия компоратор

function truthy(x,y){
    return (x !== false) && existy(x);
}

function existy(x){
    return x != null;
}

function doWhen(condition, action){
	if(truthy(condition)){
		return typeof action === 'function' ? action() : action;
	}
	return undefined;
}

function executeIfHasField(target, name){
	return doWhen(existy(target[name]), function(){
		return target[name];
	});
}

function getProperty(key){
	return function(dataArray){
		return doWhen(existy(dataArray.map), function(){
			return dataArray.map(item => executeIfHasField(item, key));
		});
	}
}

function getName(arr){
	return getProperty('name')(arr)
}

export default getName;
