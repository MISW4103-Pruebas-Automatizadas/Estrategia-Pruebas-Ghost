describe('Admin Ghost - Login with valid credentials', function() {
    it('Login with valid credentials', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('#identification').type('pepe@gmail.com');
        cy.get('#password') .type('q1w2e3r4t5y6u7i8o9');
        cy.get('#ember5').click();
        cy.wait(1000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/dashboard') 
    }); 
});