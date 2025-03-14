/// <reference types="Cypress" />

describe("Ejemplo de Type pageUp, pageDown ", () =>{
    it("Type pageUp ", () =>{
        cy.visit("https://rodrigovillanueva.com.mx/")
        //cy.title().should('eq','Home Page | RodrigoVillanueva.com.mx')
        //cy.wait(1000)

        cy.get("#block-notech-subtheme-content > div > div > div.node__content.clearfix > div > div:nth-child(4) > div > div > div > div > div > div > div > div > div > div.owl-stage-outer > div > div:nth-child(5) > div > div > a").type('{pageup}')
        cy.wait(3000)
        cy.get("#block-notech-subtheme-content > div > div > div.node__content.clearfix > div > div:nth-child(4) > div > div > div > div > div > div > div > div > div > div.owl-stage-outer > div > div:nth-child(5) > div > div > a").type('{pagedown}')
        cy.wait(3000)

    })

})