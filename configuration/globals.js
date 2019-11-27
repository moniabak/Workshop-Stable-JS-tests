module.exports = {


  // before(cb) {
  //     console.log(process.argv)
  //     cb();
  //   },

  // beforeEach(browser, cb) {
    

  //   cb()
  // },

  //   after(cb) {
  //     console.log('GLOBAL AFTER')
  //     cb();
  //   },

  // afterEach(browser) {
  //   browser.perform(function () {
  //     console.log('GLOBAL afterEach')
  //     browser.end()
  //   })
  // },

  abortOnAssertionFailure: true,
  waitForConditionPollInterval: 300,
  waitForConditionTimeout: 2000,
  retryAssertionTimeout: 2000,
  throwOnMultipleElementsReturned: false
}