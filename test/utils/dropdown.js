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

async function selectDropdown () {
  const randomNum = getRandomNum(2);
  await browser.url('http://the-internet.herokuapp.com/dropdown');
  const dropdown = await browser.$('#dropdown');
  await dropdown.selectByVisibleText(`Option ${randomNum}`);
  await browser.pause(2000); // normally hate pauses but keeping this one in so you can verify an option was selected
  await browser.deleteSession();
}

selectDropdown();
