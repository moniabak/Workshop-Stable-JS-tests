const loginSelectors = require('./loginPageSelectors.js')

class LoginPage {

    constructor(browser) {

        this.browser = browser
    }

    getEmail(selector, callback) {

        this.browser.element('css selector', selector, callback)
    }

    getPassword(selector, callback) {

        this.browser.element('css selector', selector, callback)
    }

    getLoginBtn(selector, callback) {

        this.browser.element('css selector', selector, callback)

        return this
    }


    fillEmailInput(email) {

        this.getEmail(loginSelectors.email, (element) => {

            this.browser.elementIdValue(element.value.ELEMENT, email)
        })
    }

    fillPasswordInput(password) {

        this.browser.waitForElementVisible(loginSelectors.password, 1000)
        this.getPassword(loginSelectors.password, (element) => {

            this.browser.elementIdValue(element.value.ELEMENT, password)
            console.log(element.value)
        })
    }

    clickLoginBtn() {

        this.browser.Click(loginSelectors.loginBtn)
    }

    loginToTestArena() {

        this.fillEmailInput('administrator@testarena.pl')
        this.fillPasswordInput('sumXQQ72$L')
        this.clickLoginBtn()
    }
}

module.exports.LoginPage = LoginPage