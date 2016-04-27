var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var pkg = require('./package.json');

module.exports = {
  devtool: '',
  context: `${__dirname}/app`,
  entry: {
    index: './index.jsx',
    // being lazy right now
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: ''
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.css',
      '.html',
      '.json'
    ]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.json/,
      loader: 'json'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html'
    })
  ]
};
