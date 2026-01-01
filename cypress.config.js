const { defineConfig } = require("cypress");
const baseConfig = require ("./cypress.config")
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl :"https://opensource-demo.orangehrmlive.com/"
  },
  env: {
    USERNAME: 'username',
    PASSWORD: 'password'
  }
});
