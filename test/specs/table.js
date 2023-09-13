import TablePage from '../pageobjects/table.page.js';
import chai from 'chai';
import { equalCheck, confirmSort } from '../utils/util.js';

describe('Table actions', () => {
  it('Clicking last name header sorts list by last name', async () => {
    await TablePage.open();

    // Click the table header
    await TablePage.lastNameHeader.click();

    // Asserts the values are sorted in ascending order
    await chai.expect(await confirmSort(1, 'asc')).to.be.true;

    // Clicks the table header again
    await TablePage.lastNameHeader.click();

    // Asserts the values are sorted in descending order
    await chai.expect(await confirmSort(1, 'desc')).to.be.true;
  });
  it('Clicking first name header sorts list by first name', async () => {
    await TablePage.open();

    // Click the table header
    await TablePage.firstNameHeader.click();

    // Asserts the values are sorted in ascending order
    await chai.expect(await confirmSort(2, 'asc')).to.be.true;

    // Clicks the table header again
    await TablePage.firstNameHeader.click();

    // Asserts the values are sorted in descending order;
    await chai.expect(await confirmSort(2, 'desc')).to.be.true;
  });
  it('Clicking email header sorts list by email', async () => {
    await TablePage.open();

    // Click the table header
    await TablePage.emailHeader.click();

    // Asserts the values are sorted in ascending order
    await chai.expect(await confirmSort(3, 'asc')).to.be.true;

    // Clicks the table header again
    await TablePage.emailHeader.click();

    // Asserts the values are sorted in descending order;
    await chai.expect(await confirmSort(3, 'desc')).to.be.true;
  });
  it('Clicking due header sorts list by due amount', async () => {
    await TablePage.open();

    // Click the table header
    await TablePage.dueHeader.click();

    // Asserts the values are sorted in ascending order
    await chai.expect(await confirmSort(4, 'asc', true)).to.be.true;

    // Clicks the table header again
    await TablePage.dueHeader.click();

    // Asserts the values are sorted in descending order;
    await chai.expect(await confirmSort(4, 'desc', true)).to.be.true;
  });
  it('Clicking action header sets original order', async () => {
    await TablePage.open();

    // Gets order of last name column
    const originalOrder = await TablePage.getColumnValues(1);

    // Click last name header to sort by ascending
    await TablePage.lastNameHeader.click();

    // Confirms the items are now sorted
    await chai.expect(await confirmSort(1, 'asc')).to.be.true;

    // Clicks the action header to reset order
    await TablePage.actionHeader.click();

    // Confirms the order is reset and matches original order
    const resetOrder = await TablePage.getColumnValues(1);
    const isReset = await equalCheck(resetOrder, originalOrder);
    await chai.expect(isReset).to.be.true;
  });
  it('Clicking edit button adds edit anchor to url', async () => {
    // Clicks the first found edit button
    await TablePage.editLink.click();

    // Confirms url is updated
    const url = await browser.getUrl();
    await chai.expect(url).to.include('edit');
  });
  it('Clicking delete button adds delete anchor to url', async () => {
    // Clicks the first found delete button
    await TablePage.deleteLink.click();

    // Confirms url is updated
    const url = await browser.getUrl();
    await chai.expect(url).to.include('delete');
  });
});
