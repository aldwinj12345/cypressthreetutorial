const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html report
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //html report

      // You can add other node event listeners here if needed
    },
    retries: {
      runMode: 2, // Configure retries for `cypress run`
      openMode: 0, // Configure retries for `cypress open`
    },
  },
});