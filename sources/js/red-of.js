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



let f1 = data => () => {
	console.log(data);
	data = data * 10;
	console.log(data);
	return data;
}

let f2 = data => () => {
	console.log(data);
	data = data + 5;
	console.log(data);
	return data;
}

function app(data, func){
	let fa;
	let mutData;
	func.forEach(f => {
		let newF = f(mutData ? mutData : data);

		mutData = newF();

	})
}

app(10, [f1, f2])
