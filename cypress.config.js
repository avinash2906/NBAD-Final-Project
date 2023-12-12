const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    CYPRESS_APPLITOOLS_API_KEY: 'fYcrSCjBjXwJxkQ1Ju0uVaR2ShEpgJY8aJIoVxfvvjM110',
  },
});


require('@applitools/eyes-cypress')(module);
