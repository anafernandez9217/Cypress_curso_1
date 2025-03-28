/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Record Cypress Studio', () =>{ 
    let tiempo=1500

    // Lo mismo pero para el alias pero se necesita una promesa
    it('Record Cypress Studio', () =>{
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html')
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)



        /* ==== Generated with Cypress Studio ==== */
        cy.get('#nombre').clear('hana');
        cy.get('#nombre').type('hana');
        cy.get('#apellidos').clear('nero');
        cy.get('#apellidos').type('nero');
        cy.get('#tel').clear('3311777082');
        cy.get('#tel').type('3311777082');
        cy.get('#email').clear('hello@cypress.io');
        cy.get('#email').type('hello@cypress.io');
        cy.get('#direccion').clear('Toronja 123');
        cy.get('#direccion').type('Toronja 123');
        cy.get('.btn-primary').click();
        /* ==== End Cypress Studio ==== */
    })

});