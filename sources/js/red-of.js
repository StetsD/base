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
