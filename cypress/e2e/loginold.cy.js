const baseUrl = Cypress.config('baseUrl');
//const username=Cypress.fixture.user('username');

//describe('template spec', () => {
 // it('passes', () => {
  //cy.visit(baseUrl);
  
  //cy.get('#user_login').type('wordpress');
 // cy.get('#user_pass').type('di(r31vRnfzpu9$Jsq');
 //cy.get('#wp-submit').click();

  // Assert that a new URL is loaded
  //cy.url().should('include', '/commands/actions');

  // Interact with an input field
 // cy.get('.action-email') .type('http://localhost/wordpress/wp-login.php') .should('have.value', 'http://localhost/wordpress/wp-login.php');

  //})
//})


//describe('Fixture File Test', () => {
 // it('Loads fixture data', () => {
    // Load the fixture file
  //  cy.fixture('user').then((user) => {

    //  cy.visit(baseUrl);

    //  cy.log('Username:', user.username); // Logs "Username: testuser"

      // Example usage
      //cy.get('#user_login', { timeout: 10000 }).should('be.visible').clear().focus().type(user.username, { delay: 150 }).blur();
     //cy.get('#user_pass', { timeout: 10000 }).should('be.visible').clear().focus().type(user.password, { delay: 150 }).blur();
     // cy.get('#wp-submit', { timeout: 10000 }).should('be.visible').click();

  //  });
//  });
//});


describe('Login Test with Fixture', () => {
  let userData;

  before(() => {
    cy.fixture('user').then((data) => {
      userData = data; // Assign fixture data
    });
  });

  it('Logs in using fixture data', () => {
    cy.visit(baseUrl);
    cy.get('#user_login').type(userData.username,{ delay: 150 });
    cy.get('#user_pass').type(userData.password,{ delay: 150 });
    cy.get('#wp-submit').click();
  });
});