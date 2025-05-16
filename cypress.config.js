const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 2,
      openMode: 0,
    },
    screenshotOnRunFailure: true, //this would enable when test fail
    video: true, //enable video recording
    videoCompression: false, //optional: this means disbaling compression for better quality
    videoUploadOnPasses: false, //only upload videos for failed tests
  },
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
})