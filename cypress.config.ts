const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    projectId: "4ff94c",
    specPattern: "cypress/e2e/",
    viewportWidth: 2000,
    viewportHeight: 1260,
    defaultCommandTimeout: 30000,
    experimentalSourceRewriting: false,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/report/mochawesome-report",
    },
  },
});
