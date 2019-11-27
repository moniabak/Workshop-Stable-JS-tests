const packageJson = require('./package.json')
const screenshotPath = './screenshots/' + packageJson.version + '/'


const config = {

  "src_folders": [
    "tests"
  ],
  "output_folder": "./reports/",
  "custom_commands_path": "./commands/",
  "custom_assertions_path": "./assertions/",
  "globals_path": "./configuration/globals.js",

  "selenium": {
    'start_process': true,
    'server_path': require('selenium-server').path,
    'log_path': './reports/logs/',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': require('chromedriver').path,
      'webdriver.gecko.driver': require('geckodriver').path
    }
  },

  // "test_workers": {
  //   "enabled": true,
  //   "workers": 1
  // },

  "test_settings": {

    "default": {
      'silent': true,
      'disable_colors': false,
      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': true,
        'path': screenshotPath
      },
      'end_session_on_fail': true,
      'desiredCapabilities': {
        'browserName': 'chrome',
        'marionette': false,
        'javascriptEnabled': false,
        'acceptSslCerts': false,
      }
    },

    "firefox": {
      "desiredCapabilities": {
        'browserName': 'firefox',
        'moz:firefoxOptions': {
          'args': ["-maximize"]
        },
        'javascriptEnabled': true,
        'marionette': true,
        'acceptSslCerts': true,
        'acceptInsecureCerts': true
      }
    },

    "chrome": {
      "desiredCapabilities": {
        'browserName': 'chrome',
        "chromeOptions": {
          "args": ['start-maximized']
        },
        'javascriptEnabled': true,
        'marionette': true,
        'acceptSslCerts': true,
        'acceptInsecureCerts': true
      }
    }
  }
}

module.exports = config