const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters', // Use the multi-reporter plugin
  reporterOptions: {
    configFile: 'reporter-config.json', // Specify the config file for multi-reporters
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