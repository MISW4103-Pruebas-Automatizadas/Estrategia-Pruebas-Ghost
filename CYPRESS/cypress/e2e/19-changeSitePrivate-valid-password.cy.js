describe('Admin Ghost - Change site privacy with valid password', function() {
it('Change site privacy with valid password', function() {
  cy.visit('http://localhost:2368/ghost/#/signin');
  cy.get('#identification').type('pepe@gmail.com');
  cy.get('#password').type('q1w2e3r4t5y6u7i8o9#');
  cy.get('#ember5').click();//boton login
  cy.wait(4000);        
  cy.get('[data-test-nav="settings"]').click();//boton settings
  cy.wait(1000);
  cy.get('[data-testid="locksite"]').find('button').contains('span', 'Edit').click();  
  cy.wait(1000);    
  cy.get('[data-testid="locksite"]').find('button[role="switch"]').click();
  cy.get('[data-testid="locksite"]').find('input[placeholder="Enter password"]').type('q1w2e3r4t5y6u7i8o9#');
  cy.get('[data-testid="locksite"]').find('span').contains('Save').click();
  
  
  
  cy.get('[data-testid="locksite"]').contains('span', 'Saved', { timeout: 10000 }).should('be.visible');
  }); 
});
