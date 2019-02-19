const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')
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
    'server_path': seleniumServer.path,
    'log_path': './reports/logs/',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': chromedriver.path
    }
  },

	"test_workers": {
		"enabled": true,
		"detailed_output": false,
		"workers": 1
	},

	"test_settings": {

		"default": {
      'launch_url': '',
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
        'marionette': true,
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },
		"chrome": {
			"desiredCapabilities": {
        'browserName': "chrome",
        'platform': 'Windows 10',
        'version': ' 67.0.3396.99 64-bit',
        'chromeOptions': {
          'args': [
            'start-maximized'
          ]
        },
        'marionette': true,
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    }
	}
}

module.exports = config