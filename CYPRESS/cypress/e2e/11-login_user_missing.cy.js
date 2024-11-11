describe('Admin Ghost - Login with missing user', function() {
    it('Login with missing user', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('#password') .type('q1w2e3r4t5y6x');
        cy.get('#ember5').click();
        cy.wait(1000);
        cy.get('.main-error').then(($error)=>{
            expect($error[0].innerText).contains("Please fill out the form to sign in.")
        })  
    }); 
});