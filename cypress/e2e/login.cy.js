// describe('Login Page', () => {
//   beforeEach(() => {
//     // Adding delay before visiting the URL
//     cy.wait(5000); // Adjusting  delay as needed
//     cy.visit('http://localhost:3000/login');
//   });

//   it('should display the login form', () => {
//     cy.get('h2').should('contain.text', 'Login Page');
//     cy.get('form').should('exist');
//     cy.get('label').should('have.length', 2); // Assuming there are two labels for username and password
//     cy.get('input[type="text"]').should('exist');
//     cy.get('input[type="password"]').should('exist');
//     cy.get('button[type="submit"]').should('contain.text', 'Login');
//   });
// });

describe('Login Page', () => {
  it('successfully logs in with valid credentials', () => {
    // Visit the login page
    cy.visit('http://localhost:3000/login');

    // Enter valid credentials
    cy.get('#username').type('yourUsername');
    cy.get('#password').type('yourPassword');

    // Submit the form
    cy.get('form').submit();

    // Assert that the login was successful and user is redirected
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

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
});
