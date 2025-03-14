/// <reference types="Cypress" />

require('cypress-xpath')

describe("Reto de Selects ", () =>{
    it("Reto de Select ", () =>{
        cy.visit("https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/#google_vignette ")
        cy.wait(2000)

        // Si esto sucede, comienza la promesa que tiene la función
        cy.get(".unselected").select(["Abigail Barber","Belinda Lane","Brown Smith"]).then(() => {
            cy.get(".str").should("be.visible").click().then(()=>{
                cy.wait(2000)
                cy.get(".atr").click().then(()=>{
                    cy.wait(2000)
                    // Al cumplirse una promesa, se cumple la siguiente, cumplir la siguiente
                    cy.get(".atl").click().then(()=>{
                        cy.wait(2000)
                        cy.log("Se movieron todos los elementos")
                    })
                })
            })

        })

    })

    it.only("Reto de Select ", () =>{
        cy.visit("http://www.hipertexto.info/documentos/hipertexto.htm") 
    })


})