const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html report
  reporterOptions: {
    //charts: true,
    //reportPageTitle: 'orangehrm',
    //embeddedScreenshots: true,
    //inlineAssets: true,
    //saveAllAttempts: false,
    overwrite: false,
    html: false,
    json: true
    //timestamp: 'yyyymmdd__HH_MM_ss',
    //reportFilename: 'my_updated_report' // Your desired filename (without the .html extension)
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure: true; // this will take screenshot when fail test case
      require('cypress-mochawesome-reporter/plugin')(on); //html report

      // Register the 'failed' task handler for cypress-mochawesome-reporter (likely)
      on('task', {
        'failed': (message) => {
          console.error('Mochawesome Reporter - Test Failed:', message);
          // I can add more here depending on how the reporter uses this task.
          // For a basic setup, just logging might be sufficient to prevent the error.
          return null;
        },
      });
    },
    retries: {
      runMode: 2, // Configure retries for `cypress run`
      openMode: 0, // Configure retries for `cypress open`
    },
  },
});