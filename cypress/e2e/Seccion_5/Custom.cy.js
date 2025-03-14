/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Comandos Personalizados', () =>{ 
    let tiempo=1000
    before(() => {  
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq',"Formulario de Ejemplo")
        cy.wait(tiempo)
    })
    it('Demo uno', () =>{
        cy.Campo_visible("#nombre", "Juan", 500 )
        cy.Campo_visible("#apellidos", "Garcia", 2000)
        cy.Campo_visible_xpath('//*[@id="tel"]',"3311457780", 1000)
        cy.Campo_visible_xpath('//*[@id="email"]',"juan.g@gmail.com", 1000)
        cy.Campo_visible_xpath('//*[@id="direccion"]',"Toronja 123", 1000)
        cy.Click_force_xpath('//*[@id="myForm"]/button[1]',500)
        
    })

    it.only('Demo dos todo el bloque', ()=>{
        cy.Bloque_formulario("Juan", "Garcia", 3311457780, "juan.g@gmail.com", "Toronja 123", 600)
    })


});