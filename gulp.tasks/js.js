'use strict';

//Config
import config from '../gulp.config';
let {SRC_DIR, PUB_DIR} = config;
import wOptions from '../webpack.config';


//Common Modules
import gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';
let G = GulpLoadPlugins(config.GLP);


//Specials Modules
import webpack from 'gulp-webpack';

//Compile
module.exports = (cb) => {
	return gulp.src(SRC_DIR._BASE + SRC_DIR._JS + SRC_DIR._JS_INPUT)
		.pipe(webpack(wOptions))
		.pipe(gulp.dest(PUB_DIR._BASE + PUB_DIR._JS));
}
