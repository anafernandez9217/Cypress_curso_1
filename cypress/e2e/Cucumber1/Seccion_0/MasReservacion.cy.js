/// <reference types="Cypress" />

require('cypress-xpath')

describe("Nueva reservacion sitio Más rent a car ", () =>{

    it("Index principal ", () =>{
        let time= 1000;
        let timeLong= 5000;
        cy.visit("https://dev.masrentacar.com/en/index")
        cy.title().should('eq','Home - Mas Rent a Car')
        cy.wait(time)
        cy.get('.check-custom').should('be.visible').click({force: true})
        cy.wait(time)
        cy.get('.wrapper-pickup > .react-autosuggest__container > div').should("be.visible").type('GDL - Guadalajara Aeropuerto, Guadalajara, Jalisco, México')
        cy.wait(time)
        cy.get('.wrapper-drop > .react-autosuggest__container > div').should("be.visible").type('GDL2 - Guadalajara  Chapalita, Guadalajara, Jalisco, México')
        cy.wait(time)
  
        // Intentando cambiar horario //
        cy.get('#inputPickupDdate').should("be.visible").click()
        cy.get('#btn-timepicker').should("be.visible").click()
        cy.xpath('//*[@id="btn-timepicker"]/div/div/li[31]').should("be.visible").click()
        cy.wait(time)
        cy.get('[aria-label ="Choose Thursday, March 13, 2025 as your check-in date. It’s available."]').should("be.visible").click()
        
        cy.wait(time)
        cy.get('#inputDropoffDdate').should("be.visible").click({force: true})
        //cy.get('#btn-timepicker > span').should("be.visible").click()
        
        //cy.get('#btn-timepicker > span').should('be.visible').click({force: true})


  
        cy.wait(time)
        //cy.get('#btn-timepicker').should("be.visible").click()
        //cy.xpath('//*[@id="btn-timepicker"]/div/div/li[37]').should("be.visible").click()
        //cy.wait(time)

        //cy.get("[type='i']").should("contain","9:00 am")
        //cy.get('#btn-timepicker > span').should("be.visible").select("01:00 pm")
        //cy.get('li').eq(2).should('be.visible').click() // 

        // Seleccionar intervalo de fechas
        /*cy.get('#btn-timepicker > span').should("be.visible").click()
        cy.wait(time)
        cy.xpath('//*[@id="btn-timepicker"]/div/div/li[27]').should("be.visible").click()
        cy.wait(time)
        cy.get('[aria-label="Choose Friday, March 7, 2025 as your check-in date. It’s available."]').should("be.visible").click()
        cy.wait(time)
        cy.get('#btn-timepicker > span').should("be.visible").click()
        cy.wait(time)
        cy.xpath('//*[@id="btn-timepicker"]/div/div/li[31]').should("be.visible").click()
        cy.wait(time)
        cy.get('[aria-label="Choose Sunday, March 23, 2025 as your check-out date. It’s available."]').should("be.visible").click()
        cy.wait(time)
        // Seleccion de unidad
        cy.get('.wrapper-mex-form-input-btn > .ml-auto').should("be.visible").click()
        cy.wait(timeLong)
        cy.get('#card_3 > div > div').should("be.visible").click()
        cy.wait(time)*/


  
    })

})