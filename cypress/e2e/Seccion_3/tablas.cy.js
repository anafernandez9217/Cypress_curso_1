/// <reference types="Cypress" />

describe("Elementos de una tabla ", () =>{
    it("CHLDREN ", () =>{
        let tiempo = 1500
        cy.visit("https://datatables.net/examples/basic_init/alt_pagination.html ")
        //cy.title()
        cy.wait(tiempo)

        cy.get(".content").children(".page_title").should("contain","Alternative pagination").click({force:true})

        /// Tomame el elemento uno del grupo
        cy.get("[type='button']").eq(1).should("contain","1").click({force:true})

    })

    it("Seleccionar por medio de EQ ", () =>{
        let tiempo = 1500
        cy.visit("https://datatables.net/examples/basic_init/alt_pagination.html ")
        //cy.title()
        cy.wait(tiempo)

        cy.get(".content").children(".page_title").should("contain","Alternative pagination").click({force:true})

        /// Tomame el elemento uno del grupo
        cy.wait(tiempo)
        //cy.get("[type='button']").filter(".dt-paging-button current").should("contain","1").first()//.click({force:true})
        cy.get("[type='button']").filter(".current").should("contain","1").click()
        cy.wait(tiempo)
        cy.get("[type='button']").filter(".next").should("contain","›").click()
    
    })

    it("Seleccionar por medio de Find ", () =>{
        let tiempo = 1500
        cy.visit("https://datatables.net/examples/basic_init/alt_pagination.html ")
        //cy.title().should('Demo')
        cy.wait(tiempo)

        /// Tomame el elemento uno del grupo
        //cy.get(".dt-paging-button").find(".next").should("contain","›").click()
        cy.get("[type='button']").contains("›").click()
    
    })

    it("Seleccionar por medio de First ", () =>{
        let tiempo = 1500
        cy.visit("https://datatables.net/examples/basic_init/alt_pagination.html ")
        //cy.title().should('Demo')
        cy.wait(tiempo)

        /// Tomame el elemento uno del grupo
        cy.get(".active").find("li").first().click()
        cy.get(".active").find("li").last().click()

    })

    it("Seleccionar los elementos siguiente NextAll ", () =>{
        let tiempo = 1500
        cy.visit("https://datatables.net/examples/basic_init/alt_pagination.html ")
        //cy.title().should('Demo')
        cy.wait(tiempo)

        /// Tomame el elemento uno del grupo
        cy.get("[type='button']").should("contain","‹")
        cy.wait(tiempo)
        cy.get("[type='button']").should("contain","‹").nextAll().should("have.length", 7)

    })

    it.only("Seleccionar al elemento padre ", () =>{
        let tiempo = 1500
        cy.visit("https://datatables.net/examples/basic_init/alt_pagination.html ")
        //cy.title().should('Demo')
        cy.wait(tiempo)

        /// Tomame el elemento uno del grupo
        cy.get("[type='button']").parent().should("have.class","previous")
        cy.wait(tiempo)
        //cy.get("[type='button']").should("contain","‹").nextAll().should("have.length", 7)

    })
    


})