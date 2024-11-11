describe('Admin Ghost - Register with missing Email', function() {
    it('Register with missing Email', function() {
        cy.visit('http://localhost:2368/ghost/#/setup');
        cy.get('#blog-title').type('Grupo 12');
        cy.get('#name').type('Pepe Perez');
        cy.get('#password').type('123');
        cy.get('#ember4').click();
        cy.wait(1000);

        cy.get('.response').then(($x1) => {
            cy.get('.main-error').then(($x2) => {                              
                expect($x1[2].innerText.includes('Please enter an email') && $x2[0].innerText.includes('Please fill out every field correctly to set up your site.')).to.be.true;
            });
        });
    }); 
});