import {BasePage} from '../page-objects/base-page';
import {HomePage} from '../page-objects/home-page';

describe('Way 2 automation', () => {
  const basePage = new BasePage();
  const homePage = new HomePage();

  it('Launch Way2', () => {
    basePage.navigate();
  });

  it('Search the page with string “test” and print out the search result in log', () => {
    // homePage.serachTest()
    const log = Cypress.log(homePage.serachTest());
    const l = Cypress.log(cy.get('body'));
    const t = Cypress.log(cy.get('[ng-controller=mainCtrl]'));
  });

});





