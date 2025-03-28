const { defineConfig } = require("cypress");
///const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    ///specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      ///on('file:preprocessor', cucumber())
      experimentalStudio: true
  
    },
    "viewportWidth": 1400,
    "viewportHeight": 700,
    "chromeWebSecurity": false,
    "defaultCommandTiemout": 15000,// dar hasta 15 seg para detectar un elemento dentro de la pagina
    "pageLoadTimeout":9000, 
    "video": true,// solo funciona con comando de run y la ruta exacta:npx cypress run --spec cypress\integration\seccion_6\pageObject_1.cy.js
    projectId: "k73pnx",
    //"testFiles": "**/*.feature",
    // Es el cypress record para dar los comandos al tocar en automatico
    "experimentalStudio": true,

    //chromeWebSecurity: false,

  },

  
  
});
