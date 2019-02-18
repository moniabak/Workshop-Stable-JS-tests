exports.command = function(selector, value, message = `Entered value: ${value} into the field: ${selector}`) {
	return this
		.waitForElementVisible(selector)
		.clearValue(selector)
		.setValue(selector, value, () => {
			console.log(message)
		})
}