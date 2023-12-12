describe('Login Page', () => {

  it('displays an error message with invalid credentials', () => {
    // Visit the login page
    cy.visit('http://localhost:3000/login');

    // Enter invalid credentials
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword');

    // Submit the form
    cy.get('form').submit();

    // Assert that an error message is displayed
    cy.get('p').should('have.text', 'Invalid username or password');
  });

  it('successfully logs in with valid credentials', () => {
    // Visit the login page
    cy.visit('http://localhost:3000/login');

    // Enter valid credentials
    cy.get('#username').type('dummy1234');
    cy.get('#password').type('pwd_test');

    // Submit the form
    cy.get('form').submit();

    // Assert that the user is redirected to the home page
    cy.url().should('eq', 'http://localhost:3000/'); // replace with the actual URL of your home page
  });

});
