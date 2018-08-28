// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html



module.exports = function (config) {
  const process = require('process');
  process.env.CHROME_BIN = require('puppeteer').executablePath();
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter'),
      require('puppeteer')      
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly','junit'],
      fixWebpackSourcePaths: true
    },
    junitReporter    : {
      outputFile: 'test-results.xml'
    },
    customLaunchers: {
      ChromeHeadless:  {
        base: 'Chrome',
        flags:  [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222'
        ],
      }
    },
    reporters: ['progress', 'junit', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};