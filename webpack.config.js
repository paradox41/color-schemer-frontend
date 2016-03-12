var path = require('path');

var webpack = require('webpack');

// plugins
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV || 'development';
var isProduction = NODE_ENV === 'production';

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  debug: true,
  context: __dirname + '/app',
  entry: {
    app: './app.ts',
    vendor: './vendor.ts'
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: isProduction ? '[name].bundle.[hash].js' : '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts',
      query: {
        'ignoreDiagnostics': [
          2403, // 2403 -> Subsequent variable declarations
          2300, // 2300 -> Duplicate identifier
          2374, // 2374 -> Duplicate number index signature
          2375, // 2375 -> Duplicate string index signature
          2502 // 2502 -> Referenced directly or indirectly
        ]
      }
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  noParse: [
    /.+zone\.js\/dist\/.+/,
    /.+angular2\/bundles\/.+/,
    /angular2-polyfills\.js/
  ],
  resolve: {
    root: path.resolve(__dirname, 'app/'),
    extenstions: ['', '.js', '.json', '.html', '.ts']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }
    }),
    new CopyWebpackPlugin([{
      from: '*.{html,json}'
    }]),
    new BrowserSyncPlugin({
      server: {
        baseDir: ['build/'],
        routes: {
          '/node_modules': 'node_modules'
        }
      }
    })
  ]
};
