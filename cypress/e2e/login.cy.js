const baseUrl = Cypress.config('baseUrl');

describe('Login Test with Fixture', () => {
  let userData;

  before(() => {
    cy.fixture('user').then((data) => {
      userData = data; // Assign fixture data
    });
  });

  it('Logs in using fixture data', () => {
    cy.visit(baseUrl);
    cy.get('#user_login', { timeout: 10000 }).should('be.visible').clear().focus().type(user.username, { delay: 150 }).blur();
    cy.get('#user_pass').type(userData.password,{ delay: 150 });
    cy.get('#wp-submit').click();
  });
});