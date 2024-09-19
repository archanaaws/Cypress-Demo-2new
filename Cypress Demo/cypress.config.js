const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    defaultCommandTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      const envFileName = './test.settings.json';
      const settings = require(envFileName);
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }
     return config;
    },
  },
});
