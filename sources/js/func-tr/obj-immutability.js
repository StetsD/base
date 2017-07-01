//иммутабельность

var x = [{a: [1,2,3], b: 42}, {c: {d: []}}];

Object.freeze(x);

x[1]['c']['d'] = 100000;

//Top level
console.log(x)

function deepFreeze(obj){
    if(!Object.isFrozen(obj)) Object.freeze(obj);

    for(var key in obj){
        if(!obj.hasOwnProperty(key) || typeof obj[key] !== 'object') continue;
        deepFreeze(obj[key]);
    }
}

var y = [{a: [1,2,3], b: 42}, {c: {d: []}}];
deepFreeze(y);

y[1]['c']['d'] = 42;
console.log(y)
