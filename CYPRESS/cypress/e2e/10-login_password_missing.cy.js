describe('Admin Ghost - Login with missing password', function() {
    it('Login with missing password', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('#identification').type('dani-sie@uniandes.edu.co');
        cy.get('#ember5').click();
        cy.wait(1000);
        cy.get('.main-error').then(($error)=>{
            expect($error[0].innerText).contains("Please fill out the form to sign in.")
        })  
    }); 
});