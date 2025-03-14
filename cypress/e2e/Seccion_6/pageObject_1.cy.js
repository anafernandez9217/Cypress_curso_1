/// <reference types='Cypress' />
import ProyectoUno_PO from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO.cy';

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Page objects Models', () =>{ 

    // Podemos usar las funciones contenidas en el archivo que importamos
    const master=new ProyectoUno_PO()

    //master.visiHome

    Cypress.on('uncaught:exception', (err, runnable)=> {
        return false
    })
    
    /*
    let tiempo=1000
    before(() => {  
        cy.visit('Url'),
        cy.title().should('eq','titulo')
        cy.wait(tiempo)
    })*/

    it('Test uno', () =>{
        master.SeccionUno("Carlos", "hana9217", "hana_9217@gmail.com", 1000)
        //master.SeccionDos("https://www.google.com.mx", "2025-02-28", 1000)
    })

    it('Test Dos', () =>{
        master.SeccionDos("https://www.google.com.mx", "2025-02-28", 1000)
    })
});