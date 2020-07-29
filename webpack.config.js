const path = require('path');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');


module.exports = {

	mode: "development",

	devtool: "source-map",

	context: path.resolve(__dirname, "src"),

	entry: "./app.js",

	//entry: "./src/app.js", // if no 'context'

	output: {
		filename: "[name].[contentHash].bundle.js",
		//path: path.resolve(__dirname, 'build') // 'dist' is default folder name
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	plugins: [
		new BabelMinifyPlugin({},{
			comments: false
		})
	]



}