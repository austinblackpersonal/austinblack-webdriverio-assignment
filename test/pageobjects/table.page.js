import { $ } from '@wdio/globals';
import Page from './page.js';

class TablePage extends Page {

    open() {
        return super.open('tables');
    }

    get lastNameHeader() {
        return $('span=Last Name');
    }

    get firstNameHeader() {
        return $('span=First Name');
    }

    get emailHeader() {
        return $('span=Email');
    }

    get dueHeader() {
        return $('span=Due');
    }

    get actionHeader() {
        return $('span=Action');
    }

    get editLink() {
        return $('a=edit');
    }

    get deleteLink() {
        return $('a=delete');
    }

    async getColumnValues(ind) {
        const values = []

        for await (const val of $$(`#table1 tbody tr > td:nth-child(${ind})`)) {
            values.push(await val.getText())
        }

        return values
    }
}

export default new TablePage();