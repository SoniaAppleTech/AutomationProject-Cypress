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
    cy.get('#user_login', { timeout: 10000 }).should('be.visible').clear().focus().type(userData.username, { delay: 150 }).blur();
    cy.get('#user_pass').type(userData.password,{ delay: 150 });
    cy.get('#wp-submit').click();
    
  });
 

  //it('Should load settings page and display all options', () => {
  //  cy.get('.settings-title').should('contain', 'welcome-panel');
   // cy.get('show-settings-link').should('be.visible');
   // cy.get('#notification-settings').should('be.visible');
 // });

 // it('Should update and save settings', () => {
   // cy.get('#profile-name').clear().type('Updated User');
   // cy.get('#save-button').click();
   // cy.get('.toast-message').should('contain', 'Settings saved successfully');
   // cy.reload();
   // cy.get('#profile-name').should('have.value', 'Updated User');
 // });
});