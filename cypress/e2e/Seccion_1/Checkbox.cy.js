// Para que funcionen los comandos
/// <reference types="Cypress" />

describe("Nueva sección Checkbox ", () =>{
    it("Check uno ", () =>{
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html ")
        cy.wait(1000)

        /*cy.get("[type='checkbox']").check().should("be.checked")
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")*/
        cy.wait(4000)

        //Check por selección
        cy.get("#isAgeSelected").check().should("be.checked")
    


    })

})