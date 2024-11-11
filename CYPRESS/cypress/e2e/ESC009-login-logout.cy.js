describe('Admin Ghost - Login and logout', function() {
    it('Login and logout', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('#identification').type('pepe@gmail.com');
        cy.get('#password') .type('q1w2e3r4t5y6u7i8o9');
        cy.get('#ember5').click();//login
        cy.wait(4000);
        cy.get('#ember33').click();//person
        cy.wait(1000);
        cy.get('#ember46').click();//signout
        cy.wait(2000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/signin')
    }); 
});

