var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var pkg = require('./package.json');

module.exports = {
  devtool: '',
  context: `${__dirname}/app`,
  entry: {
    index: './index.js',
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
      '.css',
      '.html',
      '.json'
    ]
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.(css|less)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.txt$/,
      loader: 'raw'
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
  ],
  postcss: function() {
    return [
      require('autoprefixer'),
      require('postcss-bem'),
      require('postcss-css-variables'),
      require('postcss-bem-linter')('bem'),
      require('postcss-reporter')()
    ];
  }
};
