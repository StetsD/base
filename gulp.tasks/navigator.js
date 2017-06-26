'use strict';

//Config
import config from '../gulp.config';
let {SRC_DIR, PUB_DIR} = config;


//Common Modules
import gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';
let G = GulpLoadPlugins(config.GLP);


//Generate pages list
module.exports = () => {
	return gulp.src(SRC_DIR._BASE + '/static/_navigator.html')
		.pipe(G.inject(gulp.src([PUB_DIR._BASE + '/*.html'], {read:false}),
			{
				removeTags: true,
				transform: function(filepath, file){
					if(filepath.slice(-5) === '.html'){
						var regName = /(\/public\/)|(\.html)/gi,
							fileName = filepath.replace(regName, ''),
							cleanPath = fileName + '.html';

						return '<li class="list__item"><a href="' + cleanPath + '" class="list__link">' + fileName + '</a></li>';
					}
					return inject.transform.apply(inject.transform, arguments);
				},
			}
		))
		.pipe(G.inject(gulp.src(SRC_DIR._BASE + '/static/_navigator.html'),{
			starttag: '<!-- inject:name -->',
			removeTags: true,
			transform: function(){
				return config.NAME;
			}
		}))
		.pipe(gulp.dest(PUB_DIR._BASE))
};