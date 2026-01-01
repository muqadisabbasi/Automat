const { defineConfig } = require("cypress")
const  baseConfig = require ("./cypress.config")
require ( "dotenv").config ( {path: "././.env"})

const e2eOverride = { 
    baseURL : "https://opensource-demo.orangehrmlive.com/",
}

const envOverride = { 
    USERNAME: process.env.stage.USERNAME_STAGE,
    PASSWORD: process.env.stage.PASSWORD_STAGE,
}

module.exports = defineConfig (
    ...baseConfig,
    e2e = {
        ...baseConfig,
        ...e2eOverride
    },
    env = {
        ...baseConfig,
        ...envOverride
    })
    
