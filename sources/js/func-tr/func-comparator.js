//ф-ия компоратор

function lessOrEqual(x,y){
	return x <= y;
}

function greaterThen(x,y){
    return x > y;
}

function greaterOrEqual(x,y){
    return x >= y;
}

function truthy(x,y){
    return (x !== false) && existy(x);
}

function existy(x){
    return x != null;
}

function comparator(pred){
    return function(x,y){
        if(truthy(pred(x,y))) return -1;
        else if(truthy(pred(y,x))) return 1;
        else return 0;
    }
}

export default {
    comparator: comparator,
    lessOrEqual: lessOrEqual,
    greaterThen: greaterThen,
    greaterOrEqual: greaterOrEqual,
    truthy: truthy
};
