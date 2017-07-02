//lazy chain promise (Pipe-line-pattern)
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
function existy(x){
    return x != null;
}


//LazyChainPromise

function LazyChainPromise(obj){
    this._calls = [];
    this._target = obj;
}

LazyChainPromise.prototype.invoke = function(){
    var first = getFirst(toArray(arguments)),
        rest = getRest(toArray(arguments));

    this._calls.push(function(taget){
        if(typeof first === 'string'){
            var meth = target[first];

            if(existy(meth)){
                return meth.apply(target, rest);
            }
        }else if(typeof first === 'function'){
            return first.apply(first, [target]);
        }
    });

    return this;
}

LazyChainPromise.prototype.run = function(callback, index, target){
    if(!index || index < this._calls.lenght){
        target = target || this._target;
        index = index || 0;

        Promise.resolve(this._calls[index](target)).then(function(result){
            this.run(callback, ++index, result || target);
        }.bind(this));
    }else{
        callback(target);
    }
}

var m = new LazyChainPromise([2,1,3])
    .invoke(function(target){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(target.concat([4,5,6]));
            }, 2000);
        });
    })
    .invoke(function(target){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(target.concat([7,8,9]));
            }, 1000);
        });
    })
    .invoke(function(target){
        return target.concat([100, 200, 45]);
    })
    .invoke('sort');

m.run(function(result){
    console.log(result)
})
