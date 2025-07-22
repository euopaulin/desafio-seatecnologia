const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v11qqt',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
