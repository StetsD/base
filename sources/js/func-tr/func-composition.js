//Composition
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
function _curry(fn){
    var args = getRest(toArray(arguments));

    return function(){
        return fn.apply(this, args.concat(toArray(arguments)));
    }
}
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

//------------------------------
var compose = function(f, g){
    return function(x){
        return f(g(x));
    }
}

var sine = function(x){
    return Math.sin(x);
}

var cube = function(x){
    return x * x * x;
};

var sineOfCube = compose(sine, cube);

console.log(sineOfCube(10) === sine(cube(10)));
console.log(sineOfCube(10));
console.log(sine(cube(10)));


//---------------------------
var compose = function(){
    var args = [].slice.call(arguments);

    return function(){
        var _arguments = arguments;
        return args.reverse().reduce(function(cur, next){
            return cur ? next.call(next, cur) : next.apply(next, _arguments);
        }, 0);
    }
}

var limit = curry(function(num, data){
    return data.slice(0, num);
});

var _map = curry(function(fn, arr){
    return arr.map(fn);
});

var getProp = curry(function(prop, obj){
    return obj[prop];
});

var users = [
    {name: 'Ivan', age: 18},
    {name: 'Katya', age: 23},
    {name: 'Victor', age: 45},
    {name: 'Nata', age: 12},
    {name: 'Alex', age: 20},
    {name: 'Sveta', age: 55},
    {name: 'Boris', age: 16},
];

var userList = compose(
    _map(
        getProp('name')
    ), limit(4)
);
console.log(userList(users));
