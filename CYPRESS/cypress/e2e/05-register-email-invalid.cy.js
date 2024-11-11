describe('Admin Ghost - Register with invalid mail', function() {
    it('Register with invalid mail', function() {
        cy.visit('http://localhost:2368/ghost/#/setup');
        cy.get('#blog-title').type('Grupo 12');
        cy.get('#email').type('123');
        cy.wait(1000);
        cy.get('#email').blur();
        cy.get('.response').then(($error)=>{
            expect($error[2].innerText).contains("Invalid Email.")
        })    
    }); 
});