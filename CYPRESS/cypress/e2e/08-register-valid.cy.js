describe('Admin Ghost - Register with valid data', function() {
    it('Register with valid data', function() {
        cy.visit('http://localhost:2368/ghost/#/setup');
        cy.get('#blog-title').type('Grupo 12');
        cy.get('#name').type('Pepe Sanchez');
        cy.get('#email').type('pepe@gmail.com');
        cy.get('#password').type('q1w2e3r4t5y6u7i8o9');
        cy.get('#ember4').click();
        cy.wait(8000);
        cy.url().should('eq', 'http://localhost:2368/ghost/#/dashboard')
    }); 
});

