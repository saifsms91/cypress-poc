
describe('Way 2 automation' , () => {


  it('Launch Way2' , () => {


    cy.visit('http://www.way2automation.com/angularjs-protractor/webtables/')



  })
});

describe('Edit each row of the table' , () => {


  it('update the company name to AAA' , () => {


    for(let i = 1; i < 7; i++) {

      cy.get(`:nth-child(${i}) > :nth-child(10) > .btn`).click()
      cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > .ng-pristine').click()
      cy.get(':nth-child(6) > :nth-child(2) > .ng-valid').select('Sales Team')
      cy.get('.checkbox > .ng-pristine').uncheck()
      cy.get('.btn-success').click()
    }
  //




  })

  it('Validate sale team on home page selected' , () => {
    cy.get('tbody > :nth-child(1) > :nth-child(6)').invoke('text')
        .should('equal', 'Sales Team'
        )


  })

  it('set it to unlocked' , () => {


  })

});
