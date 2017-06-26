'use strict';

//Common Modules
import gulp from 'gulp';


//Specials Modules
import sequence from 'run-sequence';


//Build project
module.exports = () => {
	sequence('clean', ['js', 'css', 'pug', 'img', 'fonts', 'data'], 'navigator');
};
