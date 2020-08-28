const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const rootPath = path.join(__dirname, '../../');

module.exports = {
	mode: 'production',
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	entry: path.join(rootPath, '/server/index.tsx'),
	output: {
		path: path.join(rootPath, '/dist/'),
		filename: "ssr.js",
		globalObject: 'this'
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
		new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(rootPath, '/dist/')],
    }),
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