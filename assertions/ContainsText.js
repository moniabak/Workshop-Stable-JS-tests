const util = require('util')


exports.assertion = function(selector, expectedText, msg) {

	let MSG_ELEMENT_NOT_FOUND = 'Testing if element: <%s> contains text: "%s". ' +
		'Element could not be located.'

	this.message = msg || util.format('Testing if element: <%s> contains text: "%s".', selector, expectedText)

	this.expected = function () {
		return expectedText
	}

	this.pass = function (value) {
		return value.indexOf(expectedText) > -1
	}

	this.failure = function (result) {
		let failed = result === false || result && result.status === -1
		if (failed) {
			this.message = msg || util.format(MSG_ELEMENT_NOT_FOUND, selector, expectedText)
		}
		return failed
	}

	this.value = function (result) {
		return result.value
	}

	this.command = function (callback) {
		return this.api.getText(selector, callback)
	}
}