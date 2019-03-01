module.exports = {

  'Demo test': function (browser) {
    browser
      .url('http://demo.testarena.pl/zaloguj')
      .waitForElementVisible('#content_login', 1000)
      .assert.assertTitle('TestArena Demo')
      .assert.visible('.front-log')
      .waitForElementVisible('#email', 1000)
      .clearValue('#email')
      .setValue('#email', 'administrator@testarena.pl')
      .waitForElementVisible('#password', 1000)
      .clearValue('#password')
      .setValue('#password', 'sumXQQ72$L')
      .waitForElementVisible('#save', 1000)
      .click('#login')
      .pause(2000)
      .waitForElementVisible('body', 1000)
      .assert.urlEquals('http://demo.testarena', 'optional message')
    browser.end()
  }
}