const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/mochawesome-report',
    overwrite: false,
    html: true, // Ensure HTML report is generated
    json: true, // Ensure JSON report is generated
    jsonFilename: 'mochawesome', // Set a specific filename for the JSON report
    timestamp: false, // Optional: remove timestamp from filename
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        'failed': (message) => {
          console.error('Mochawesome Reporter - Test Failed:', message);
          return null;
        },
      });
    },
    retries: {
      runMode: 2,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
    video: true,
  },
});