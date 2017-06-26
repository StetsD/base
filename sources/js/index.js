'use strict';

import Menu from './menu';

let menu = new Menu();

console.log(menu.showMenu())
$('#require-menu').on('click', function(){

	require.ensure([], function(){
		var Test = require('./test');
		var test = new Test();

		alert(test.say());

	});
});
