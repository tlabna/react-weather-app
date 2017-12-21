var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'index_bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	// Allow requesting urls from browser
	devServer: {
		historyApiFallback: true
	},
	plugins: [new HTMLWebpackPlugin(
		{template: 'app/index.html'}
	)]
};