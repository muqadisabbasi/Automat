const { defineConfig } = require("cypress");
const baseConfig = require ("./cypress.config")
require ('dotenv').config ( { path: './.env'})
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl :"https://opensource-demo.orangehrmlive.com/"
  },
  env: {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
  }
});
