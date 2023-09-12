import { $ } from '@wdio/globals';
import Page from './page.js';

class HoverPage extends Page {
    open() {
        return super.open('hovers')
    }

    async getProfile(profileNum) {
        const profiles = await $$('.figure');
        return profiles[profileNum - 1];
    }

    async getProfileLink(profileNum) {
        return await $(`a[href="/users/${profileNum}"]`)
    }

}

export default new HoverPage();