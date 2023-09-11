import 'dotenv/config'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import chai from 'chai';

describe('Login and Logout', () => {
    it('should login with valid credentials, and log out successfully', async () => {
        const username = "tomsmith"
        const password = process.env.PASSWORD
        await LoginPage.open()

        await LoginPage.login(username, password);
        const url = await browser.getUrl();

        // assertions on the secure page to confirm login
        await chai.expect(url).to.include('secure');
        await chai.should().exist(SecurePage.flashAlert);
        const flashTextLogin = await SecurePage.flashAlert.getText();
        await chai.expect(flashTextLogin).to.include('You logged into a secure area!')

        await SecurePage.logoutButton.click();

        //assertions to confirm logout was successful

        await chai.should().exist(LoginPage.flashAlert);
        const flashTextLogout = await LoginPage.flashAlert.getText();
        await chai.expect(flashTextLogout).to.include('You logged out of the secure area!')


    })
})

