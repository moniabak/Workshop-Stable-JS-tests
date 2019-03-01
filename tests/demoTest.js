const loginPage = require('./../pages/loginPage.js').LoginPage
const util = require('./../utils/exampleUtils.js').Utils

module.exports = {

  'Demo test': function (browser) {

    let utils = new util()

    let url = utils.getBaseUrl()
    browser
      .url(url[0])
      .assert.title('TestArena Demo')
      .assert.visible('.front-log')
      .waitForElementVisible('#email', 1000)
    new loginPage()
    .clickLoginBtn()
    .
      .loginToTestArena()
    // .assert.urlEquals('http://demo.testarena', 'optional message')
    browser.end()
  }
}