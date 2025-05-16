const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // ... other setupNodeEvents code
    },
    retries: {
      runMode: 2,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
    video: true,
    videoUploadOnPasses: false,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
    reportDir: 'cypress/reports/${{ matrix.browsers }}', // Ensure this matches your workflow path
  },
});