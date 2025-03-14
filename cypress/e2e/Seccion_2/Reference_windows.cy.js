// Las ventanas, propiedades de las ventanas de Windows
// Curso de Cypress Nivel Básico
/// <reference types="Cypress" />

describe("Referencias a Windows ", () =>{
    it("Windows propiedades charset ", () =>{
        // Aberiguar el tipo de formato que tiene la página, 
        // el utf8 formato es el que permite meter los asentos y ñ
        cy.visit("testsheepnz.github.io/random-number.html ")
        cy.title().should('eq','The Number Game')
        cy.wait(1500)

        cy.document().should("have.property", "charset").and('eq','UTF-8')


    })

    // Todas las paginas tienen una direccion IP
    // Esta IP se traduce como una URL la cual es más facil de localizar
    // Se va validar toda la url y también un fragmento
    it("Windows url ", () =>{
        cy.visit("testsheepnz.github.io/random-number.html ")
        cy.title().should('eq','The Number Game')
        cy.wait(1500)

        // Si tiene incluido o tiene un pedazo de
        cy.url().should("include", "random-number.html")
        // Eq pide que la url sea valida osea que sea completa
        cy.url().should("eq", "https://testsheepnz.github.io/random-number.html")


    })

})