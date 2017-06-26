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
	return gulp.src(SRC_DIR._BASE + SRC_DIR._PUG + SRC_DIR._PUG_INPUT)
		.pipe(G.changed(PUB_DIR._BASE + PUB_DIR._PUG))
		.pipe(G.pug({
			pretty: true
		})).on('error', G.notify.onError(function(error){
			return 'Error: ' + error.message;
		}))
		.pipe(G.if(!config.NODE_ENV, G.htmlPrettify({indent_char: '	', indent_size: 1})))
		.pipe(gulp.dest(PUB_DIR._BASE + PUB_DIR._PUG));
};
