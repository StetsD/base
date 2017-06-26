'use strict';

//Config
import config from './gulp.config';
let {SRC_DIR, PUB_DIR} = config;


//Common Modules
import gulp from 'gulp';


function requireTask(task, path){
	gulp.task(task, function(callback){
		let task = require(path).bind(this);

		return task(callback);
	});
}

//Js
requireTask('js', './gulp.tasks/js');

//Styles
requireTask('css', './gulp.tasks/css');

//Pug
requireTask('pug', './gulp.tasks/pug');

//Images
requireTask('img', './gulp.tasks/img');

//Fonts
requireTask('fonts', './gulp.tasks/fonts');

//Static-Data
requireTask('data', './gulp.tasks/data');

//Clean
requireTask('clean', './gulp.tasks/clean');

//Navigator
requireTask('navigator', './gulp.tasks/navigator');

//Bs
requireTask('bs', './gulp.tasks/bs');

//Build
requireTask('build', './gulp.tasks/build');
