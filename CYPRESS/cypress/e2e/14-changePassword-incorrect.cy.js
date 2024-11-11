describe('Admin Ghost - Change password with wrong old password', function() {
it('Change password with wrong old password', function() {
    cy.visit('http://localhost:2368/ghost/#/signin');
    cy.get('#identification').type('pepe@gmail.com');
    cy.get('#password').type('q1w2e3r4t5y6u7i8o9');
    cy.get('#ember5').click();//boton login
    cy.wait(4000);        
    cy.get('.gh-user-avatar').click();//boton persona
    cy.wait(1000);
    cy.get('[data-test-nav="user-profile"]').click();//boton profile
    cy.wait(2000);
    cy.get('span').each(($span) => {
        if ($span.text().trim() === 'Change password') {
          cy.wrap($span).scrollIntoView().wait(1500).click();
          cy.wait(1000);
          cy.xpath('//*[@id=":r1s:"]').type('q1w2e3r4t5y6u7i8o9x');
          cy.xpath('//*[@id=":r1u:"]').type('q1w2e3r4t5y6u7i8o9##');
          cy.xpath('//*[@id=":r20:"]').type('q1w2e3r4t5y6u7i8o9##');
          cy.wait(1000);
        }
      }).then(() => {
        cy.get('span').each(($span) => {
          if ($span.text().trim() === 'Change password') {
            cy.wrap($span).click();
            cy.wait(1000);
            cy.contains('span', 'Your password is incorrect.', { timeout: 10000 }).should('be.visible');
          }
        });
      });
      
  }); 
});
