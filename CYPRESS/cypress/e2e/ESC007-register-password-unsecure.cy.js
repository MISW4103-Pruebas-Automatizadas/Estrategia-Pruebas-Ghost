describe('Admin Ghost - Register with unsecure password', function() {
    it('Register with unsecure password', function() {
        cy.visit('http://localhost:2368/ghost/#/setup');
        cy.get('#password').type('1234567890');
        cy.wait(1000);
        cy.get('#password').blur();
        cy.wait(1000);
        cy.get('.response').then(($error)=>{
            expect($error[3].innerText).contains("Sorry, you cannot use an insecure password")
        })  
    }); 
});