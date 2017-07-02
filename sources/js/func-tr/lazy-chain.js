//lazy chain
function getRest(arrOrString){
    return toArray(arrOrString).slice(1);
}
function toArray(arr){
	return (
		(Array.isArray(arr) && arr)
		|| (!Array.isArray(arr) && arr.length && [].slice.call(arr))
		|| (typeof arr === 'string' && arr.split(''))
		|| (typeof arr === 'object' && [])
	)
}
function existy(x){
    return x != null;
}


function LazyChain(obj){
    this._calls = [];
    this._target = obj;
}

LazyChain.prototype.invoke = function(methodName){
    var args = getRest([].slice.call(arguments));

    this._calls.push(function(target){
        var meth = target[methodName];
        if(existy(meth)){
            return meth.apply(target, args);
        }
        return null;
    });

    return this;
}

console.log(new LazyChain([2,1,3]).invoke('sort')._calls);

LazyChain.prototype.run = function(){
    return this._calls.reduce(function(target, thunk){
        return thunk(target);
    }, this._target);
};

console.log(new LazyChain([2,1,3]).invoke('sort').run());
console.log(
    new LazyChain([2,1,3])
        .invoke('concat', [8,5,7,6])
        .invoke('sort')
        .invoke('join', ' ')
        .run()
);

LazyChain.prototype.tap = function(fn){
    this._calls.push(function(target){
        fn(target);
        return target;
    });

    return this;
};


var defferedChain = new LazyChain([2,1,3])
    .invoke('concat', [8,5,7,6])
    .invoke('sort')
    .tap(function(target){
        console.log('tap', target);
    })
    .invoke('join', ' ');

console.log(defferedChain.run());
