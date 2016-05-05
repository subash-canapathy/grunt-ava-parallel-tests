import test from 'ava'
require('../lib/testBeforeAfterHooks.js');

test('test1 foo', async t => {
  await setTimeout(t, 2000);
  t.pass();
});

test('test2 foo', async t => {
  await setTimeout(t, 1000);
  t.pass();
});

test('test3 foo', async t => {
  await setTimeout(t, 1000);
  t.pass();
});

test('@bvt test foo', t => {
  console.log("driverHost : " + process.env.driverHost);
  console.log("driverType : " + process.env.driverType);
  console.log("TestFoo Using webdriver " + t.context.wd);
  t.pass();
});