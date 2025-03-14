/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Carga por Fixture', () =>{ 
    let tiempo=1500

    // Lo mismo pero para el alias pero se necesita una promesa
    it('Test uno Cargando desde Json', () =>{

        // Vamos a pasarle un arraglo, para que cada que lo recorra se lo pase a una variable de tipo data
        //cy.fixture("datos2").then(tesdata => {
        //cy.fixture("MOCK_DATA").then(tesdata => {
            cy.fixture("data").then(tesdata => { //https://beautifytools.com/excel-to-json-converter.php pzbi
            tesdata.forEach(data => {

            const d_nombre=data.nombre
            const d_apellidos=data.apellidos
            const d_tel=data.tel
            const d_email=data.email
            const d_dir=data.dir

            cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html') 
            cy.title().should('eq','Formulario de Ejemplo')
            cy.wait(tiempo)
        

            cy.get('#nombre  ').should('be.visible').type(d_nombre)
            cy.get('#apellidos').should('be.visible').type(d_apellidos)
            cy.get('#tel').should('be.visible').type(d_tel)
            cy.get('#email').should('be.visible').type(d_email)
            cy.get('#direccion').should('be.visible').type(d_dir)
            cy.get('.btn-primary').should('be.visible').click({force: true})
        
            })
        })

    })

});