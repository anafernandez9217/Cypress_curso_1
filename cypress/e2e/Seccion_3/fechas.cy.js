/// <reference types="Cypress" />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Campos de tipo fecha ", () =>{
    it("Fecha uno ", () =>{
        let tiempo=1800
        //cy.visit("https://demoqa.com/date-picker ")
        cy.visit("https://www.wufoo.com/html5/date-type/")
        //cy.title("eq", "Topics DEMOQA")
        cy.wait(tiempo)

        // Si se cumple esta promesa lo siguiente a realizar sera precionar sobre ese mismo lugar esc
        cy.get(':nth-child(5) > input').should("be.visible").type("2024-08-17").then(()=>{
            //cy.get(':nth-child(5) > input').should("be.visible").type('{esc}')
            //cy.get(':nth-child(5) > input').should("be.visible").tab()
           cy.get(':nth-child(7) > input').should("be.visible").focus()
           //cy.get(':nth-child(7) > input').should("be.visible").click(10,20)
        })

        // Si pudiera seleccionar con inspeccionar una fecha dentro del campo fecha
        //cy.get(':nth-child(7) > input').should("be.visible").click()
        //cy.wait(tiempo)
        //cy.get(".today").first().click({force:true})

    })

    it.only("Fecha dos ", () =>{
        let tiempo=2000
        cy.visit("https://www.wufoo.com/html5/date-type/")
        //cy.visit("https://www.viajaralmundo.com/aerolineas/spirit-aerolineas-vuelos-nk?utm_source=googlespmxc&utm_medium=cpc&utm_campaign=CPA-Online-(Esp)-Performance-Max-Mexico&g_adg=&utm_content=&pn=mxp&gad_source=1&gclid=EAIaIQobChMItP-b8evDiwMV4CRECB3ZMA9JEAAYASAAEgKfGPD_BwE")
        //cy.title("eq", "Vuelos de Spirit Airlines : reserve los boletos de Spirit Airlines en ViajaralMundo")
        cy.wait(tiempo)

        //cy.get("[placeholder='Nov 28 2019']").should("be.visible").clear().type("Nov 17 2025",{force: true})
        cy.get(':nth-child(5) > input').should("be.visible").type("2025-08-17")
        cy.get(':nth-child(6) > input').should("be.visible").type("00:00:30.75")

    })

    it("Fecha tres ", () =>{
        let tiempo=2000
        cy.visit("https://www.wufoo.com/html5/date-type/")
        cy.wait(tiempo)

        cy.get(':nth-child(5) > input').should("be.visible").type("2025-08-17").tab().type("00:00:30.75")

    })

})