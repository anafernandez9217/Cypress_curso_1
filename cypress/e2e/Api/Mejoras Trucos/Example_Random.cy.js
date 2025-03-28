/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Metodos de Carga por Randoms', () =>{ 

    it('Test Random', () =>{

        let tiempo=700
        let numero_pruebas=3

        for(let num=1;num<=numero_pruebas;num++)
        {
            //let estado_Arr = ["1: 1", "3: 13", "5: 32"];
            let estado_Arr = ["555", "777", "888", "Juan", "Rodrigo"];
            let Random_estado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];
            let cantidad = Math.floor(Math.random() * 3000);

            cy.visit("https://validaciones.rodrigovillanueva.com.mx/Campos_Tres_OK.html")
            cy.title().should('eq',"Formulario de Ejemplo")
            cy.wait(tiempo)

            cy.get('#phone').should('be.visible').type('3311777082')
            cy.wait(tiempo)
            cy.get('#noSpaces').should('be.visible').type(Random_estado)
            cy.wait(tiempo)
            cy.get('#noSpecialChars').should('be.visible').type('9217' + cantidad)
            cy.wait(tiempo)
            cy.get('#password').should('be.visible').type('Hello*123' + cantidad)
            cy.wait(tiempo)
            cy.get('#range').should('be.visible').type('17')
            cy.wait(tiempo)
            cy.get('#whitelist').should('be.visible').type('php')
            cy.wait(tiempo)
            if(num==numero_pruebas)
                cy.get('.btn-primary').should('be.visible').click({force: true})
            else
                cy.get('.btn-secondary').should('be.visible').click({force: true})
            cy.wait(tiempo)


        }


    })

});