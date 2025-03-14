// Para que funcionen los comandos
/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Segundo Reto ", () =>{
    it("Probando la aplicación ", () =>{
        cy.visit("http://computer-database.gatling.io/computers ")
        cy.title().should('eq','Computers database')
        cy.wait(1500)

        // Buscando
        cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()

        // Add
        cy.get("#add").should("be.visible").click()
        cy.get("[name='name']").should("be.visible").type("cypress")
        cy.get("#introduced").should("be.visible").type("2021-03-15").tab().type("2025-03-15")
        // Combo
        cy.get("#company").should("be.visible").select("Nokia").should("have.valuie","16").wait(1500)

    })

})