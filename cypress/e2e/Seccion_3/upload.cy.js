/// <reference types="Cypress" />
// RECOMENDACION DE CYPRESS TODO LO QUE SEA CARGA DE ARCHIVOS E IMAGENES COLOCARLO
// DENTRO DEL FOLDER "fistures"

require('cypress-xpath')
import 'cypress-file-upload'

describe("Upload Imagenes ", () =>{
    it("Cargando imagenes ", () =>{
        //cy.visit("https://demoqa.com/automation-practice-form")
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.title().should('eq','The Internet')
        cy.wait(1000)

        const ruta='cisnes.jpg'
        cy.wait(3000)
        //cy.get('#uploadPicture')
        // Tomar el tipo de archivo: file
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)
        cy.get("#file-submit").click()


    })

})