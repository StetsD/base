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
	return gulp.src(SRC_DIR._BASE + SRC_DIR._CSS + SRC_DIR._CSS_INPUT)
		.pipe(G.changed(PUB_DIR._BASE + PUB_DIR._CSS))
		.pipe(G.if(config.NODE_ENV, G.sourcemaps.init()))
		.pipe(G.sass({
			outputStyle: G.if(config.NODE_ENV, 'compressed')
		})).on('error', G.notify.onError(function(error){
			return 'Error: ' + error.message;
		}))
		.pipe(G.if(config.NODE_ENV, G.sourcemaps.write('.')))
		.pipe(gulp.dest(PUB_DIR._BASE + PUB_DIR._CSS));
};
