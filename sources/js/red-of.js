'use strict';

import {Button} from './red-of/Button';
import {Input} from './red-of/Input';
import store from './red-of/store';

$(function(){

    let button = new Button({elem: '#btn-click', store}).init();
    let input = new Input({elem: '#input-me', store}).init();



    store.subscribe(()=>{
        // console.log(store.getState().reducerButton);
        // console.log(store.getState().reducerInput);
    });
})

let log = (func, data) => console.log(func, data);

let f1 = data => data * 10;

let f2 = data => data + 5;

function app(data, func, mid){
	let mutData;

	func.forEach(f => {
		mid("Entry:" + f.toString().match(/^function\s(\w)+/)[0].replace(/function/g, ''), mutData || data);

		let newF = f(mutData ? mutData : data);
		mutData = newF;

		mutData && mid("Output:" + f.toString().match(/^function\s(\w)+/)[0].replace(/function/g, ''), mutData);
	});

	return mutData;
}

app(10, [f1, f2], log)
