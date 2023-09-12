import HoverPage from "../pageobjects/hover.page.js";
import chai from "chai";

describe('Hover actions', () => {
    it('Hover over user1 and view profile', async () => {
        const userNum = 1;
        await HoverPage.open();

        // Hovers over profile and navigates to profile page
        const userProfile = await HoverPage.getProfile(userNum);
        await userProfile.moveTo();
        const profileLink = await HoverPage.getProfileLink(userNum);
        await profileLink.click();

        // Checks the url of the page
        const url = await browser.getUrl();
        await chai.expect(url).to.include(`users/${userNum}`)
    });
    it('Hover over user2 and view profile', async () => {
        const userNum = 2;
        await HoverPage.open();

        // Hovers over profile and navigates to profile page
        const userProfile = await HoverPage.getProfile(userNum);
        await userProfile.moveTo();
        const profileLink = await HoverPage.getProfileLink(userNum);
        await profileLink.click();

        // Checks the url of the page
        const url = await browser.getUrl();
        await chai.expect(url).to.include(`users/${userNum}`)
    });
    it('Hover over user3 and view profile', async () => {
        const userNum = 3;
        await HoverPage.open();

        // Hovers over profile and navigates to profile page
        const userProfile = await HoverPage.getProfile(userNum);
        await userProfile.moveTo();
        const profileLink = await HoverPage.getProfileLink(userNum);
        await profileLink.click();

        // Checks the url of the page
        const url = await browser.getUrl();
        await chai.expect(url).to.include(`users/${userNum}`)
    });
})