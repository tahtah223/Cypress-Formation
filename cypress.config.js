const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;


module.exports = defineConfig({
  projectId: "1ofxzd",
  e2e: {

    setupNodeEvents(on, config) {

      on('file:preprocessor', cucumber());

      config.specPattern = 'cypress/e2e/features/*.feature';
    
      return config;
    },
    
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    env: {
      urlDev:
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      urlProd:
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      userId: "Admin",
      passWord: "admin123",
    
    },
  },
  stepDefinitions: 'cypress/support/step_definitions/*',
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  video: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/results/mochawesome",
    overwrite: false,
    html: false,
    json:true,
},
});