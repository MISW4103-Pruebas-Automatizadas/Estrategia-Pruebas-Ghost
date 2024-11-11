describe('Admin Ghost - Change site title and description', function() {
it('Change site title and description', function() {
  const randomTitle = "randomTitle " +Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  const randomDescription = "randomDescription " + Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  cy.visit('http://localhost:2368/ghost/#/signin');
  cy.get('#identification').type('pepe@gmail.com');
  cy.get('#password').type('q1w2e3r4t5y6u7i8o9#');
  cy.get('#ember5').click();//boton login
  cy.wait(4000);        
  cy.get('[data-test-nav="settings"]').click();//boton settings
  cy.wait(1000);
  cy.get('[data-testid="title-and-description"]').find('button').contains('span', 'Edit').click();  
  cy.wait(1000);    
  cy.get('[data-testid="title-and-description"]').find('input[placeholder="Site title"]').type(randomTitle);
  cy.get('[data-testid="title-and-description"]').find('input[placeholder="Site description"]').type(randomDescription);
  cy.get('[data-testid="title-and-description"]').find('span').contains('Save').click();
  cy.get('[data-testid="title-and-description"]').contains('span', 'Saved', { timeout: 10000 }).should('be.visible');

    
  }); 
});
