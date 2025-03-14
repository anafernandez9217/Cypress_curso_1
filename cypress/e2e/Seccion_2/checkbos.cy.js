/// <reference types="Cypress" />

require('cypress-xpath')

describe("Nueva sección Checkbox ", () =>{
    it("Check uno ", () =>{
        cy.visit("https://testsheepnz.github.io/panther.html ")
        //cy.get("[type='radio']").check()
        //cy.get("[type='checkbox']").uncheck().should("not.be.checked")
        cy.wait(2000)

        //Check por selección
        cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(2000)
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
        cy.get("#reconPod").check().should("be.checked")
        //cy.xpath("//input[contains(@type,'checkbox')])[2]").check()

    })

    it("Radios Button ", () =>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Radios_Ok.html ")
        cy.wait(2000)
        cy.get("#opcion2").click()


    })

})
