exports.command = function(selector, position, txt, time, message = `Setting value: ${txt}, to element on position ${position} from list ${selector}`) {
    return this
        .waitForElementVisible(selector)
        .elements('css selector', selector, (elements) => {
            this
                .elementIdClear(elements.value[position - 1].ELEMENT)
                .elementIdValue(elements.value[position - 1].ELEMENT, txt, () => {
                    console.log(message)
                })
        })
}