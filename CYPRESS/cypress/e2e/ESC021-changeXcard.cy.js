describe('Admin Ghost - Change site X card', function() {
it('Change site X card', function() {
  const randomXMetaTitle = "randomXMetaTitle " +Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  const randomXMetaDescription = "randomXMetaDescription " + Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  cy.visit('http://localhost:2368/ghost/#/signin');
  cy.get('#identification').type('pepe@gmail.com');
  cy.get('#password').type('q1w2e3r4t5y6u7i8o9#');
  cy.get('#ember5').click();//boton login
  cy.wait(4000);        
  cy.get('[data-test-nav="settings"]').click();//boton settings
  cy.wait(1000);
  cy.get('#twitter').click();//Metadata
  cy.wait(1000);  
  cy.get('[data-testid="twitter"]').find('button').contains('span', 'Edit').click();  
  cy.wait(1000);    
  cy.get('[data-testid="twitter"]').find('input[type="text"]').eq(0).type(randomXMetaTitle);
  cy.get('[data-testid="twitter"]').find('input[type="text"]').eq(1).type(randomXMetaDescription);
  cy.get('[data-testid="twitter"]').find('span').contains('Save').click();
  cy.get('[data-testid="twitter"]').contains('span', 'Saved', { timeout: 10000 }).should('be.visible');

    
  }); 
});
