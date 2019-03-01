exports.command = function (selector, message = `Entered value: ${value} into the field: ${selector}`) {
    return this
        .waitForElementVisible(selector)
        .click(selector)
}