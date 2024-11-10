const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video:true,
    specPattern: ['cypress/e2e/**/*.cy.js', '!cypress/e2e/ignore/**/*'],
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });
    },
    
  },
});
