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
import webpack from 'webpack';

//Compile
module.exports = (cb) => {
	webpack(wOptions, function(err, stats){
		if(err){
			throw err;
		}

		if(!cb.called){
			cb.called = true;
			cb();
		}
	});
}
