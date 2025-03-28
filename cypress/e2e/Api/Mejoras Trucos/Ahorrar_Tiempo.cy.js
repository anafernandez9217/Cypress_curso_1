/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Mejorando los tiempos de desarrollo', () =>{ 
    it('Truco Video', () =>{
        let tiempo=1500
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Campos_Tres_OK.html")
        cy.title().should('eq',"Formulario de Ejemplo")
        cy.wait(tiempo)

        cy.get('#phone').should('be.visible').type('3311777082')
        cy.wait(tiempo)
        cy.get('#noSpaces').should('be.visible').type('Hello')
        cy.wait(tiempo)
        cy.get('#noSpecialChars').should('be.visible').type('9217')
        cy.wait(tiempo)
        cy.get('#password').should('be.visible').type('Hello*123')
        cy.wait(tiempo)
        cy.get('#range').should('be.visible').type('17')
        cy.wait(tiempo)
        cy.get('#whitelist').should('be.visible').type('php')
        cy.wait(tiempo)
        cy.get('.btn-primary').should('be.visible').click()
        cy.wait(tiempo)


    })
});