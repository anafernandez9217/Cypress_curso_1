/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Demo de una Rest Api.', () =>{ 
    let tiempo=1500

    // Lo mismo pero para el alias pero se necesita una promesa
    it('Test dos', () =>{
        /*cy.visit("https://dev.masrentacar.com/en/index")
        cy.title().should('eq','Car Rental in Mexico without Credit Card - Mas Rent a Car')
        cy.wait(tiempo)*/

        const datos={
            "Nombre": "Rodrigo",
            "Ap": "Villanueva",
            "Am": "Nieto",
            "Tel": "78687688",
            "Dir": "Demo de la Dirección",
            "Cursos": [
                {
                    "Nombre": "Php",
                    "Descripcion": "Lenguaje de Programación Php"
                },
                {
                    "Nombre": "Java",
                    "Descripcion": "Lenguaje de Programación Java"
                },
                {
                    "Nombre": "Python",
                    "Descripcion": "Lenguaje de Programación Python"
                },
            ]
        }

        cy.log(datos.Nombre)
        cy.log(datos.Dir)
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[1])
        cy.log(datos.Cursos[2].Nombre)
        cy.log(datos.Cursos[2].Descripcion)


    })

});