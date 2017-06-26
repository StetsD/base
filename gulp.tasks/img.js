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
	return gulp.src(SRC_DIR._BASE + SRC_DIR._IMG + SRC_DIR._IMG_EXT)
		.pipe(G.changed(PUB_DIR._BASE + PUB_DIR._IMG + '/'))
		.pipe(G.if(!config.NODE_ENV, G.image(config.GI)))
		.on('error', G.notify.onError(function(error){
			return 'Error: ' + error.message;
		}))
		.pipe(gulp.dest(PUB_DIR._BASE + PUB_DIR._IMG))
}
