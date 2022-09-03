const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
	devtool: 'source-map',
	optimization: {
		minimize: false
	},
	mode: "development",
	watch: true,
	entry: {
		init: './src/js/dina.page.js'
	},
	output: {
		path: path.join(__dirname, 'js'),
		filename: '[name].bundle.js',
	},
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".jsx"],

	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			hash: true,
			template: "./src/index.html",
			chunks: ["init"],
			title: "Andrea Pagliarani",
			filename: path.join(__dirname, "index.html"),
			minify: false
		}),
		new webpack.HotModuleReplacementPlugin({
			multiStep: true
		}),
		new MiniCssExtractPlugin({
			filename: path.join('../assets/css/[name].css'),
		})
	],
	module: {

		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader', options: { importLoaders: 1 } }
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: path.join('../assets/img/[hash][ext][query]')
				}
			},
		]
	}
};