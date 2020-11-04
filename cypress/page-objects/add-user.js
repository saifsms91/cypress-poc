export class AddUser {

  addFirstName() {
    cy.get('thead > :nth-child(2) > td > .btn').click();
    cy.get('[name=FirstName]').click().click().type('Ab').should('have.value', 'Ab');
  }

  addLastName() {
    cy.get('[name=LastName]').click().type('tt').should('have.value', 'tt');
  }

  addUserName() {
    cy.get('[name=UserName]').click().type('add').should('have.value', 'add');
  }

  addPassword() {
    cy.get('[name=Password]').click().type('abc').should('have.value', 'abc');

  }

  mobileNumber() {

    cy.get('[name=Mobilephone]').click().type('eeeeeeee').should('have.value', 'eeeeeeee');
  }

  selectSalesTeam() {
    cy.get('[name=RoleId]').select('Sales Team');
  }

  enterEmail() {

    cy.get('[name=Email]').click().type('sa@ss.ff').should('have.value', 'sa@ss.ff');

  }

  saveButton() {

    cy.get('.btn-success').click();
  }

}
