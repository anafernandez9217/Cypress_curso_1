/// <reference types="Cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Configuración y uso de los Snippets ", () =>{

    it("Snippet uno ", () =>{
        let tiempo=1500
        cy.visit("https://demoqa.com/text-box ")
        cy.title().should('eq','ToolQA')
        cy.wait(tiempo)

        // Para generar teclas ctrl + P 
        // > y Seleccionar opcion de configurar y eleborar tu snippet
        cy.get('[:argumento}]').should('be.visible').type('texto')
            
cy.get('').type('');
        
        

    })

    /*it.only("Select con autocompletar ", () =>{
        cy.visit("https://testsheepnz.github.io/panther-build5.html#calculator  ")
        //cy.title().should('eq','Google')
        cy.wait(2000)

        // Multiselect
        //cy.get("[name='q'").should("be.visible").type("Ferrari").type("{enter}")
        //cy.get('#numDumbBomb').should("be.visible").select(["1","5"])//multiselect
        cy.get('#numDumbBomb').should("be.visible").select(["1"]).then(()=>{
            cy.get('#setEquipmentButton').should("be.visible").click()
        })
  


    })*/

})