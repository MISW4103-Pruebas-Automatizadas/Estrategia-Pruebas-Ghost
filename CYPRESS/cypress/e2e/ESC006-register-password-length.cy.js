describe('Admin Ghost - Register with invalid password', function() {
    it('Register with invalid password', function() {
        cy.visit('http://localhost:2368/ghost/#/setup');
        cy.get('#password').type('123');
        cy.wait(1000);
        cy.get('#password').blur();
        cy.wait(1000);
        cy.get('.response').then(($error)=>{
            expect($error[3].innerText).contains("Password must be at least 10 characters long")
        })  
    }); 
});