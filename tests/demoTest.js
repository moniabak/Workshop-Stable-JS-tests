const loginPage = require('./../pages/loginPage.js').LoginPage
const util = require('./../utils/exampleUtils.js').Utils


module.exports = {

  'Demo test': function (browser) {

    let utils = new util()

    let url = utils.getBaseUrl()
    browser
      .url(url[0])
      .assert.title('TestArena Demo')
    browser.end()
  }
}