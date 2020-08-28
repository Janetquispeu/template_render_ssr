const Dotenv = require('dotenv-webpack');
const common = require('./base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;

module.exports = {
  ...common,
  mode: 'production',
  optimization: {
    minimize: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new Dotenv(),
    new StatsWriterPlugin({
      filename: 'stats.json'
    })
  ]
};
