/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Demo de la primer plantilla', () =>{ 
    it('Demo uno', () =>{
        let tiempo=1000
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq',"Formulario de Ejemplo")
        cy.wait(tiempo)

        cy.get('#nombre').should('be.visible').type('rodrigo')
        cy.wait(tiempo)
        cy.get('#apellidos').should('be.visible').type('rodrigo')
        cy.wait(tiempo)

        cy.reload()
        cy.wait(tiempo)

        cy.go("back")

    })
});