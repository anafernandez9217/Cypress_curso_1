/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Primer Reto ", () =>{
    it(" ", () =>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq',"Formulario de Ejemplo")
        cy.wait(1000)

        cy.get("#nombre").should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get("#nombre").should("be.visible").clear()

        // agregando campo
        //cy.get("#nombre").should("be.visible").click()
        cy.wait(1000)
        cy.get("#nombre").should("be.visible").type("Juan").tab().
        type("Perez").tab().
        type("3338256958").tab().
        type("juan@gmail.com").tab().type("Topazio 2263")
        
        // Borrando el campo 
        cy.wait(2000)
        cy.get("#myForm > button.btn.btn-secondary").should("be.visible").click()


    })

})