/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Carga por Fixture', () =>{ 
    let tiempo=2000

    /*before(function() {  
        //cy.wait(tiempo)
        // Se pasan los datos y se hace una promesa
        cy.fixture('datos2').then(function(data){
            //this.data=data
            // Pasamos lod datos de esta funcion y lo sobrepones en la variable data
            // tipo constructor inicializado
            globalThis.data=data

        })
    })*/

    // Lo mismo de arriba pero con ALIAS
    before(function() {  
        cy.fixture("datos2").as("datos_json")//el alias
    })

    it('Test uno Cargando desde Json', () =>{
        //let tiempo=2000
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html') 
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)
        cy.get('#nombre  ').should('be.visible').type(data.nombre)
        cy.get('#apellidos').should('be.visible').type(data.apellidos)
        cy.get('#tel').should('be.visible').type(data.tel)
        cy.get('#email').should('be.visible').type(data.email)
        cy.get('#direccion').should('be.visible').type(data.dir)
        cy.get('.btn-primary').should('be.visible').click({force: true})

    })

    // Lo mismo pero para el alias pero se necesita una promesa
    it.only('Test uno Cargando desde Json', () =>{
        //let tiempo=2000
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html') 
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)

        cy.get("@datos_json").then((data)=>{

            cy.get('#nombre  ').should('be.visible').type(data.nombre)
            cy.get('#apellidos').should('be.visible').type(data.apellidos)
            cy.get('#tel').should('be.visible').type(data.tel)
            cy.get('#email').should('be.visible').type(data.email)
            cy.get('#direccion').should('be.visible').type(data.dir)
            cy.get('.btn-primary').should('be.visible').click({force: true})
        })

    })

});