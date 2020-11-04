import {BasePage} from '../page-objects/base-page';
import {HomePage} from '../page-objects/home-page';

describe('Search string and Print in Log', () => {
  const basePage = new BasePage();
  const homePage = new HomePage();

  it('Launch Way2', () => {
    basePage.navigate();
  });

  it('Search the page with string “test” and print out the search result in log', () => {
     const log = Cypress.log(homePage.serachTest());
    cy.get('[ng-repeat="column in columns"]').each(($ele, i) => {
      if ($ele.text === 'test') {
        cy.log('Search Successful for ' + ($ele.text))
      }
    })
  });

});





