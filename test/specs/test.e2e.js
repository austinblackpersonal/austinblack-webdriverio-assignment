import { expect } from '@wdio/globals'
import 'dotenv/config'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const username = "tomsmith"
        const password = process.env.PASSWORD
        await LoginPage.open()

        await LoginPage.login(username, password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

