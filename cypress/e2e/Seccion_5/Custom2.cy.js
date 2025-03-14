/// <reference types='Cypress' />

//import cypress from 'cypress';
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto de Comandos Personalizados', () =>{ 
    let tiempo=1000
    before(() => {  
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Campos_Dos_OK.html'),
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Prueba validar campos del Reto', () =>{
        cy.Bloque_Reto_Form("Carlos", "hana9217", "hana_9217@gmail.com", "https://www.google.com.mx", "2025-02-28", 1000)
     
    })

    it('Prueba validar email', () =>{
        cy.Bloque_Reto_Form("Carlos", "hana9217", "hana_9217@gmail", "https://www.google.com.mx", "2025-02-28", 1000)
        cy.Validar_campo('//*[@id="emailFormatError"]',"Ingrese un correo electrónico válido.","Email", 1000)
        
    })

    it.only('Prueba validar solo letras', () =>{
        cy.Bloque_Reto_Form("123", "hana9217", "hana_9217@gmail.com", "https://www.google.com.mx", "2025-02-28", 1000)
        cy.Validar_campo_letras('//*[@id="onlyLettersError"]',"Este campo solo debe contener letras.","Letras",1000)
        
    })
    
    
});