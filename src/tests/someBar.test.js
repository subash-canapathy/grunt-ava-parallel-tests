import test from 'ava'
require('../lib/testBeforeAfterHooks.js');

test('test1 bar', async t => {
  await setTimeout(t, 2000);
  t.pass();
});

test('test2 bar', async t => {
  await setTimeout(t, 1000);
  t.pass();
});

test('test3 bar', async t => {
  await setTimeout(t, 1000);
  t.pass();
});

test('@bvt test bar', t => {
  console.log("driverHost : " + process.env.driverHost);
  console.log("driverType : " + process.env.driverType);
  console.log("TestBar Using webdriver " + t.context.wd);
  t.pass();
});