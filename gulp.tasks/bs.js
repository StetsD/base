'use strict';

//Config
import config from '../gulp.config';
let {SRC_DIR, PUB_DIR, WATCH} = config;


//Common Modules
import gulp from 'gulp';


//Specials Modules
import BS from 'browser-sync';
let BSReload = BS.reload;
import sequence from 'run-sequence';


gulp.task('reload', function(){
	return BSReload();
});


//Starts Server
module.exports = () => {

	function BsServe(){
		BS.init(config.BS);
	}

	function parseExt(str, parent){
		let exts = str.match(/[a-z|0-9]+/ig),
			cleanP = parent.slice(1),
			modExt = exts.map((ext)=>{return `${cleanP}/**/*.${ext}`});

		return modExt;
	}

	sequence('clean', ['js', 'css', 'pug', 'img', 'fonts', 'data'], 'navigator', BsServe);


	for(let option in WATCH){
		if(WATCH[option]){
			let path = option.toString(),
				PATH = path.toUpperCase();

			gulp.watch(parseExt(SRC_DIR[`_${PATH}_EXT`], SRC_DIR[`_${PATH}`]), {cwd: SRC_DIR._BASE}, ()=>sequence(path, 'reload'))
		}
	}
};
