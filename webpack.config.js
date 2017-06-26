'use strict';

//Config
import config from './gulp.config';
let {SRC_DIR, PUB_DIR} = config;

const path = require('path');
const webpack = require('webpack');
console.log(path.resolve(__dirname, SRC_DIR._BASE + SRC_DIR._JS))
let UglifyJsPlugin = (!config.NODE_ENV) ?
	new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: true,
		warning: false
	}) : function(){};

module.exports = {
	context: path.resolve(__dirname, SRC_DIR._BASE + SRC_DIR._JS),
	entry: {
		index: './index.js',
		'func-tr': './func-tr.js'
	},
	output: {
		path: path.resolve(__dirname, PUB_DIR._BASE + PUB_DIR._JS),
		publicPath: '/js/',
		filename: '[name].js',
		chunkFileName: '[id].js'
	},
	devtool: (config.NODE_ENV) ? 'cheap-module-source-map' : '',
	resolve:{
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx']
	},
	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader'],
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /[\/\\]node_modules[\/\\]/
			},
			{
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /[\/\\]node_modules[\/\\]/
			}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),

		UglifyJsPlugin,

		new webpack.ProvidePlugin({
			// delay: 'lodash/delay'
			$: 'jquery/dist/jquery.min'
		}),

		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common'
		// }),


	]
};
