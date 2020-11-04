export class HomePage
{

//update the company name to AAA


  editRows(){
      for(let i = 1; i < 7; i++) {

        cy.get(`:nth-child(${i}) > :nth-child(10) > .btn`).click()
        cy.get('[name=optionsRadios]').first().click()
        cy.get('[name=RoleId]').select('Sales Team')
        cy.get('.checkbox > .ng-pristine').uncheck()
        cy.get('.btn-success').click()
      }

}

verifyDataUpadteSale(){

  cy.get('tbody > :nth-child(1) > :nth-child(6)').invoke('text')
      .should('equal', 'Sales Team')
}
  verifyDataUpadteComapnyName()

  {
     cy.get(':nth-child(1) > :nth-child(9) > .ng-scope').should('be.visible')

    cy.contains('Company AAA')

  }

  serachTest(){
    cy.log(cy.get('[ng-model=searchValue]').click().type("test")
        .should('have.value',"test"));

  }

}
