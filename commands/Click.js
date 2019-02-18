exports.command = function (selector, message = `Clicked selector: ${selector}`) {
	return this
		.waitForElementVisible(selector, 1000)
		.click(selector, () => {
			console.log(message)
		})
}