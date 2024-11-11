describe('Admin Ghost - Register with no data', function() {
    it('Register with no data', function() {
        cy.visit('http://localhost:2368/ghost/#/setup');
        cy.get('#ember4').click();
        cy.wait(1000);
        cy.get('.main-error').then(($error)=>{
            expect($error[0].innerText).contains("Please fill out every field correctly to set up your site")
        })  
    }); 
});