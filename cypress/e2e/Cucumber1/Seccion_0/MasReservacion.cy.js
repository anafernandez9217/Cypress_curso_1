/// <reference types="Cypress" />

require('cypress-xpath')

describe("Nueva reservacion sitio Más rent a car ", () =>{

    it("Index principal ", () =>{
        let time= 1500;
        let timeLong= 5000;
        cy.visit("https://dev.masrentacar.com/en/index")
        //cy.visit("https://qa.masrentacar.com/en/index")
        cy.title().should('eq','Car Rental in Mexico without Credit Card - Mas Rent a Car')
        cy.get('.wrapper-pickup > .react-autosuggest__container > div > .react-autosuggest__input').clear();
        cy.get('.wrapper-pickup > .react-autosuggest__container > div > .react-autosuggest__input').should("be.visible").type('gdl');
        cy.get('#react-autowhatever-autosuggest_pickup-section-0-item-0 > span').should("be.visible").click();
        cy.get('.check-custom').should("be.visible").click();
        //cy.wait(time)
        cy.get('.wrapper-drop > .react-autosuggest__container > div > .react-autosuggest__input').clear('c');
        cy.get('.wrapper-drop > .react-autosuggest__container > div > .react-autosuggest__input').should("be.visible").type('canc');
        cy.get('#react-autowhatever-autosuggest_dropoff-section-0-item-0 > :nth-child(2)').should("be.visible").click();
        cy.get('.rez-form > .container').should("be.visible").click();
        //cy.wait(time)

        // Primer fecha y horario //
        cy.get('#inputPickupDdate').should("be.visible").click()
        cy.get('#btn-timepicker').should("be.visible").click()
        cy.xpath('//*[@id="btn-timepicker"]/div/div/li[31]').should("be.visible").click()
        //cy.wait(time)
        cy.get('[aria-label ="Choose Thursday, April 3, 2025 as your check-in date. It’s available."]').should("be.visible").click()
        //cy.wait(time)
        cy.get('#inputPickupDdate').should("be.visible").click()
        //cy.wait(time)

        // Segunda fecha y horario //
        cy.get('#inputDropoffDdate').should("be.visible").click()
        //cy.wait(time)
        cy.get('#btn-timepicker > span').click()
        //cy.wait(time)
        cy.get('.pl-2 > :nth-child(37)').click()
        //cy.wait(time)
        cy.get('[aria-label="Choose Tuesday, April 8, 2025 as your check-out date. It’s available."]').should("be.visible").click()
        //cy.wait(time)

        // Forzar boton //
        cy.get('.grid-form > .btn').click({force: true});
        cy.wait(time)
        cy.get('button[class="btn search"]').should("be.visible").click({force: true})
        cy.wait(time)
        cy.get('button[class="btn search"]').should("be.visible").click({force: true})

        // Más Esencial y Extras //
        cy.get('div[class="grid-cars container unset-md"] div:nth-child(4) div:nth-child(1) div:nth-child(3) div:nth-child(2) div:nth-child(1) button:nth-child(3)').should('be.visible').click()
        cy.wait(time)
        cy.get(':nth-child(1) > .amount-extra > .extra-desc > .wrapper-btn > a > svg').click();
        cy.wait(time)
        cy.get(':nth-child(3) > .amount-extra > .extra-desc > .wrapper-btn > a > svg').click();
        cy.wait(time)
        cy.get('.wrapper-continue > button').click();
        cy.wait(time)
  
    })

})