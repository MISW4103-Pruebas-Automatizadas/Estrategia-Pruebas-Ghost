describe('Admin Ghost - Login with wrong credentials', function() {
    it('Login with wrong credentials', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('#identification').type('pepe@gmail.com');
        cy.get('#password') .type('q1w2e3r4t5y6x');
        cy.get('#ember5').click();
        cy.wait(1000);
        cy.get('.main-error').then(($error)=>{
            expect($error[0].innerText.includes('Too many login attempts') || $error[0].innerText.includes('Your password is incorrect')).to.be.true;
        })  
    }); 
});