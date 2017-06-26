'use strict';

//Config
import config from '../gulp.config';
let {SRC_DIR, PUB_DIR} = config;


//Common Modules
import gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';
let G = GulpLoadPlugins(config.GLP);


//Compile
module.exports = () => {
	return gulp.src(SRC_DIR._BASE + SRC_DIR._FONTS + SRC_DIR._FONTS_EXT)
		.on('error', G.notify.onError(function(error){
			return 'Error: ' + error.message;
		}))
		.pipe(gulp.dest(PUB_DIR._BASE + PUB_DIR._FONTS))
};
