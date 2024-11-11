describe('Admin Ghost - Change site metadata', function() {
it('Change site metadata', function() {
  const randomMetaTitle = "randomMetaTitle " +Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  const randomMetaDescription = "randomMetaDescription " + Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  cy.visit('http://localhost:2368/ghost/#/signin');
  cy.get('#identification').type('pepe@gmail.com');
  cy.get('#password').type('q1w2e3r4t5y6u7i8o9#');
  cy.get('#ember5').click();//boton login
  cy.wait(4000);        
  cy.get('[data-test-nav="settings"]').click();//boton settings
  cy.wait(1000);
  cy.get('#metadata').click();//Metadata
  cy.wait(1000);  
  cy.get('[data-testid="metadata"]').find('button').contains('span', 'Edit').click();  
  cy.wait(1000);    
  cy.get('[data-testid="metadata"]').find('input[type="text"]').eq(0).type(randomMetaTitle);
  cy.get('[data-testid="metadata"]').find('input[type="text"]').eq(1).type(randomMetaDescription);
  cy.get('[data-testid="metadata"]').find('span').contains('Save').click();
  cy.get('[data-testid="metadata"]').contains('span', 'Saved', { timeout: 10000 }).should('be.visible');

    
  }); 
});
