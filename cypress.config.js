const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html report
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //html report
      // Register the 'failed' task handler for cypress-mochawesome-reporter (likely)
      on('task', {
        'failed': (message) => {
          console.error('Mochawesome Reporter - Test Failed:', message);
          // You might need to do more here depending on how the reporter uses this task.
          // For a basic setup, just logging might be sufficient to prevent the error.
          return null;
        },
      });
    },
    retries: {
      runMode: 2, // Configure retries for `cypress run`
      openMode: 0, // Configure retries for `cypress open`
    },
    screenshotOnRunFailure: true, // Correct placement
    video: true,                 // Correct placement
  },
});