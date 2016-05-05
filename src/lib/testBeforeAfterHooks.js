import test from 'ava'

var wd = require('wd'),
  _ = require("lodash"),
  chai = require("chai"),
  chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

wd.configureHttp({
  timeout: 240000,
  retryDelay: 15000,
  retries: 5
});

function getNanoTime() {
  var hrTime = process.hrtime()
  return hrTime[0] * 1000000 + hrTime[1] / 1000;
}

test.beforeEach(t => {
  t.context.wd = getNanoTime();
  console.log("Get webdriver " + t.context.wd);
  /*var username = process.env.SAUCE_USERNAME;
   var accessKey = process.env.SAUCE_ACCESS_KEY;
   driver = wd.promiseChainRemote("ondemand.saucelabs.com", 80, username, accessKey);

   driver
   .init({
   name: this.currentTest.title,
   browserName: '',
   appiumVersion: '1.4.13',
   deviceName: process.env.deviceName,
   platformVersion: process.env.platformVersion,
   platformName: process.env.platformName,
   app: 'http://appium.s3.amazonaws.com/ContactManager.apk'
   })
   .nodeify(done);*/
  t.pass();
});

test.afterEach(t => {
  console.log("Cleanup webdriver " + t.context.wd);
  // allPassed = allPassed && (this.currentTest.state === 'passed');
  /*driver
   .quit()
   .sauceJobStatus(true)
   .nodeify(done);*/
  t.pass();
});
