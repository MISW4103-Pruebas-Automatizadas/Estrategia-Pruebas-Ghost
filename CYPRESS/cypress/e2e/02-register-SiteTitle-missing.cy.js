describe('Admin Ghost - Register with missing Site Title', function() {
    it('Register with missing Site Title', function() {
        cy.visit('http://localhost:2368/ghost/#/setup');
        cy.get('#name').type('Pepe Sanchez');
        cy.get('#email').type('pepe@gmail.com');
        cy.get('#password').type('123');
        cy.get('#ember4').click();
        cy.wait(1000);

        cy.get('.response').then(($x1) => {
            cy.get('.main-error').then(($x2) => {                              
                expect($x1[0].innerText.includes('Please enter a site title') && $x2[0].innerText.includes('Please fill out every field correctly to set up your site.')).to.be.true;
            });
        });
    }); 
});