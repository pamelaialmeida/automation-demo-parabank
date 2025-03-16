const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'reports',
      charts: true,
      overwrite: false,
      embeddedScreenshots: true,
      inlineAssets: true,
      reportFilename: "[name]-report_[datetime]_[status]",
      timestamp: "mmmm-dd-yyyy-HH-MM-ss"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://parabank.parasoft.com/parabank'
  },
});
