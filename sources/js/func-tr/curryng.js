//Кар

function toArray(arr){
    return (
        (Array.isArray(arr) && arr)
        || (!Array.isArray(arr) && arr.length && [].slice.call(arr))
        || (typeof arr === 'string' && arr.split(''))
        || (typeof arr === 'object' && [])
    )
}

function getRest(arrOrString){
    return toArray(arrOrString).slice(1);
}

function _curry(fn){
    var args = getRest(toArray(arguments));

    return function(){
        return fn.apply(this, args.concat(toArray(arguments)));
    }
}

var c = _curry(function(a, b, c){
    console.log(arguments);
});

c(1);
c(1, 2);
c(1, 2, 3);

function curry(fn, length){
    length = length || fn.length;

    return function(){
        var combined = [fn].concat(new Array().splice.apply(arguments));
        return arguments.length < length ?
            length - arguments.length > 0
                ? curry(_curry.apply(this, combined), length - arguments.length)
                : _curry.call(this, combined)
            : _curry.call(this, combined);
    };
}

function test(one, two, three, four){
    console.log(arguments);
}

var ca = curry(test);

console.log(ca('asd'));
console.log(ca('asd')('qwe'));
console.log(ca('asd')('qwe')('asd'));
console.log(ca('asd')('qwe')('asd')('rew'));
