/// <reference types="Cypress" />
describe("Seccion 1 Validando el titulo ", () =>{
    it("Test Validar el titulo ", () =>{
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/index.html')
        cy.title().should('eq','Formulario de Ejemplo')

        cy.log("Ok la función title funciona bien")

        
    })

    ////

    describe("Hacer una reservación en mexrentacar", () =>{
        it("Index principal ", () =>{
            cy.visit("https://dev3.mexrentacar.com/es/index ")
            cy.title().should('eq','Renta de autos en México, Estados Unidos y otros destinos - Mex Rent a Car')
            cy.wait(2000)
            //cy.get("#numMissiles").should("be.visible").select("4").should("have.value","4")
            cy.get('#rez-form-wrapper > form > div:nth-child(1) > div > div:nth-child(2) > input').should("be.visible").type('GDL - Guadalajara Aeropuerto, Guadalajara, Jalisco, México')
            cy.get('#react-autowhatever-autosuggest_pickup-section-0-item-0 > :nth-child(2)').should("be.visible").click()
            cy.wait(2000)
            //if()
            //cy.get('.inputPickupDdate').type("28 Feb 12:00 pm")
            //cy.get('.mr-4 far fa-clock').type()
      
            cy.get('[aria-label="Choose Friday, February 28, 2025 as your check-in date. It’s available."]').click()
            cy.wait(2000)
            cy.get('[aria-label="Choose Monday, March 24, 2025 as your check-out date. It’s available."]').click()
            cy.wait(2000)
            cy.get('.wrapper-mex-form-input-btn').should("be.visible").click()
            cy.wait(2000)
            cy.get('#card_3 > [style="overflow: hidden;"] > .car-card-content > .mt-3 > .mr-2').should("be.visible").click()
            
            //cy.get('.inputPickupDdate').click().type("28 Feb 12:00 pm")//.tab().type("00:00:30.75")
      
            })
            
      
      })

})