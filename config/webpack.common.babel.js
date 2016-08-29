var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var helpers = require('./helpers');

module.exports = {
  context: helpers.root('src'),

  entry: {
    polyfills: './polyfills.ts',
    vendor: './vendor.ts',
    app: './main.ts'
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
      loader: 'tslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.ts$/,
      loader: 'ts',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [
          'css-loader',
          'sass-loader'
        ]
      }),
      exclude: /node_modules/
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),

    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  node: {
    fs: 'empty'
  }
};
