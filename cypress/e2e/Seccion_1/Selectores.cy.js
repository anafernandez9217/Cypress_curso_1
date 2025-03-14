/// <reference types="Cypress" />

require('cypress-xpath')

describe("Tipos de Selectores ", () =>{
    it("Selector por id ", () =>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq',"Formulario de Ejemplo")
        cy.wait(1000)

        // Selector por ID = #
        // Timeout hace que nuestros asserts esten esperando un campo en especifico
        cy.get("#nombre").should("be.visible", {timeout:5000}).type("Cierra")
        cy.wait(1000)
        // Selector por Atributos
        //cy.get("[placeholder='form-control']").should("be.visible").type("Cierra")
        //cy.wait(1000)
 
        // Selector por Xpath
        cy.xpath("//*[@id='apellidos']").should("be.visible").type("Demo")

        // Selector por Contains
        //cy.get(".form-group").contains("tel").click()
        // Selector copySelector
        cy.get("#email").should("be.visible").type("hii")

    })

})