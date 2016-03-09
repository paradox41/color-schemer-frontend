var path = require('path');

var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  debug: true,
  context: __dirname + '/app',
  entry: {
    index: './index.js',
    vendor: [
      'lodash'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/build',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [
        /node_modules/
      ],
      loaders: ['babel-loader']
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  resolve: {
    root: path.resolve(__dirname, 'app/'),
    extenstions: ['', '.js', '.json', '.html']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'process.env': {
        'NODE_ENV': process.env.NODE_ENV || 'development'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new CopyWebpackPlugin([{
      from: '*.{html,json}'
    }])
  ]
};
