'use strict';

//Config
import config from '../gulp.config';
let {PUB_DIR} = config;


//Common Modules
import gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';
let G = GulpLoadPlugins(config.GLP);


//Specials Modules
import del from 'del';


//Clean Base Public Dir
module.exports = () => {
	return del([PUB_DIR._BASE + '/*', '!' + PUB_DIR + '/.gitkeep']).then(function(files){
		console.log('Deleted \n', files.join('\n'));
	})
};