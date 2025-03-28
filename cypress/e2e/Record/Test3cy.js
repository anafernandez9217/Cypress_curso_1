/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Record Cypress Studio', () =>{ 
    let tiempo=1500

    // Lo mismo pero para el alias pero se necesita una promesa
    it('Record Cypress Studio', () =>{
        cy.visit("https://dev.masrentacar.com/en/index")
        cy.title().should('eq','Car Rental in Mexico without Credit Card - Mas Rent a Car')
        cy.wait(tiempo)



        /* ==== Generated with Cypress Studio ==== */
 
        /* ==== End Cypress Studio ==== */
    })

});