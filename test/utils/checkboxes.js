import { remote } from 'webdriverio';
import { getRandomNum } from './util.js';

const browser = await remote({
  capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: process.env.CI ? ['disable-gpu'] : []
    }
  }
});

const num1 = getRandomNum(10);
const num2 = getRandomNum(10);

async function clickCheckboxes () {
  await console.log('checkbox 1: ', num1);
  await console.log('checkbox 2: ', num2);
  await browser.url('http://the-internet.herokuapp.com/checkboxes');
  const checkboxes = await browser.$$('#checkboxes input');
  for (let i = 0; i < num1; i++) {
    await checkboxes[0].click();
  }
  for (let i = 0; i < num2; i++) {
    await checkboxes[1].click();
  }
  await browser.deleteSession();
}

clickCheckboxes();
