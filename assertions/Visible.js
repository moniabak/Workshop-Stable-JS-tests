const util = require('util')


exports.assertion = function(selector, msg) {
	
	let MSG_ELEMENT_NOT_FOUND = 'Testing if element <%s> is visible. ' +
		'Element could not be located.'

	this.message = msg || util.format('Testing if element: <%s> is visible.', selector)
	this.expected = true

	this.pass = function (value) {
		return value === this.expected
	}

	this.failure = function (result) {
		let failed = result === false || result && result.status === -1
		if (failed) {
			this.message = msg || util.format(MSG_ELEMENT_NOT_FOUND, selector)
		}
		return failed
	}

	this.value = function (result) {
		return result.value
	}

	this.command = function (callback) {
		return this.api.isVisible(selector, callback)
	}

}