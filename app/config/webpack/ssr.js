const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.join(__dirname, '../../');
console.log(path.join(rootPath, '/server/index.tsx'), '********')
module.exports = {
	mode: 'production',
	entry: path.join(rootPath, '/server/index.tsx'),
	output: {
		path: path.join(rootPath, '/dist/server'),
		filename: "server.js",
		globalObject: 'this'
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	optimization: {
		minimize: false
	},
	target: 'node',
	module: {
		rules: [
			{
        test: /\.(tsx|ts$)/,
        exclude: /node_modules/,
        use: [
          { loader: 'awesome-typescript-loader' },
          { loader: 'stylelint-custom-processor-loader' }
        ]
      },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ 
			template: path.join(rootPath, '/public/index.html'),
			minify: {
        collapseWhitespace: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new Dotenv()
	]
};