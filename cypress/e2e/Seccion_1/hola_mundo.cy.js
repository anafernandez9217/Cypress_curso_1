/// <reference types="Cypress" />

describe('Primer Test con Cypress', () =>{

    it("Esto es un hola mundo desde Cypress", () =>{
        cy.log("Bienvenido a Cypress")// para imprimir en pantalla
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/index.html')

        cy.get("#nombre").type("Hana")
        cy.wait(1000)
        cy.get("#apellidos").type("Nero")
        cy.wait(1000)
        cy.get("#tel").type("3311457825")
        cy.wait(1000)
        cy.get("#email").type("nero_hana@gmail.com")
        cy.wait(1000)
        cy.get("#direccion").type("Toronja #102")
        cy.wait(1000)
        cy.get(".btn-primary").click()
        cy.wait(4000)

    

    })

  })//Cierre de describe