import {BasePage} from '../page-objects/base-page';
import {HomePage} from '../page-objects/home-page';
import {AddUser} from '../page-objects/add-user';

describe('Way 2 automation', () => {
  const basePage = new BasePage();

  it('Launch Way2', () => {
    basePage.navigate();
  });
});

describe('Edit each row of the table', () => {
  const homePage = new HomePage();
  it('update the company name to AAA, roles to sales team,set it to unlocked ', () => {
    homePage.editRows();
  });

  it('Validate sale team on home page selected', () => {
    homePage.verifyDataUpadteSale();
  });

  it('Validate Company team on home page changed', () => {
    homePage.verifyDataUpadteComapnyName();
  });

  it('Add a new user and verify it’s added successfully and the row number is incremented.', () => {
    const addUser = new AddUser();
    addUser.addFirstName();
    addUser.addLastName();
    addUser.addPassword();
    addUser.addUserName();
    addUser.mobileNumber();
    addUser.selectSalesTeam();
    addUser.enterEmail();
    addUser.saveButton();
    cy.contains('sa@ss.ff').should('to.exist');

  });

});
