/// <reference types="Cypress" />

require('cypress-xpath')

describe("Nueva sección Select ", () =>{
    it("Select uno ", () =>{
        cy.visit("https://testsheepnz.github.io/panther-build5.html#calculator ")
        cy.wait(2000)

        cy.get("#numMissiles").should("be.visible").select("2")
        cy.wait(2000)
        cy.get("#numMissiles").should("be.visible").select("4").should("have.value","4")

    })

    it.only("Select con autocompletar ", () =>{
        cy.visit("https://testsheepnz.github.io/panther-build5.html#calculator  ")
        //cy.title().should('eq','Google')
        cy.wait(2000)

        // Multiselect
        //cy.get("[name='q'").should("be.visible").type("Ferrari").type("{enter}")
        //cy.get('#numDumbBomb').should("be.visible").select(["1","5"])//multiselect
        cy.get('#numDumbBomb').should("be.visible").select(["1"]).then(()=>{
            cy.get('#setEquipmentButton').should("be.visible").click()
        })
  


    })

})
