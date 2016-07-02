var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var helpers = require('./helpers');

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },

  resolve: {
    extensions: [
      '',
      '.js',
      '.ts',
      '.scss',
      '.json',
      '.cson',
      '.tmTheme'
    ]
  },

  module: {
    preLoaders: [{
      test: /\.ts$/,
      loader: 'tslint'
    }],
    loaders: [{
      test: /\.ts$/,
      loader: 'ts'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!sass?sourceMap')
    }, {
      test: /\.(txt|tmTheme$)$/,
      loader: 'raw'
    }, {
      test: /\.(yml|yaml)$/,
      loader: 'json!yaml'
    }, {
      test: /\.cson$/,
      loader: 'cson'
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  node: {
    fs: 'empty'
  }
};
