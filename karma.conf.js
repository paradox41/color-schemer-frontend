module.exports = function(config) {
  var options = {

    basePath: '',

    frameworks: [
      'mocha',
      'chai'
    ],

    files: [
      'app/app.spec.ts'
    ],

    exclude: [],

    preprocessors: {
      'app/app.spec.ts': ['webpack', 'sourcemap', 'coverage']
    },

    webpack: require('./webpack.test.config.js'),

    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['spec', 'coverage'],

    port: 9876,

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],
    customLaunchers: {
      ChromeTravisCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    singleRun: true,

    concurrency: Infinity
  };

  if (process.env.TRAVIS || process.env.CI) {
    options.browsers = ['ChromeTravisCI'];
    options.reporters.push('coveralls');
  }

  config.set(options);
}
