module.exports = {

  'Demo test': function (browser) {
    browser
      .url('http://demo.testarena.pl/zaloguj')
      .waitForElementVisible('#content_login', 1000)
      .assert.AssertTitle('TestArena Demo')
      .assert.Visible('.front-log')
      .waitForElementVisible('#email', 1000)
      .clearValue('#email')
      .setValue('#email', 'administrator@testarena.pl')
      .waitForElementVisible('#password', 1000)
      .clearValue('#password')
      .SetValue('#password', 'sumXQQ72$L')
      .waitForElementVisible('#save', 1000)
      .Click('#login')
      .pause(2000)
      .waitForElementVisible('body', 1000)
      .assert.urlEquals('http://demo.testarena.pl/', 'optional message')
    browser.end()
  }
}