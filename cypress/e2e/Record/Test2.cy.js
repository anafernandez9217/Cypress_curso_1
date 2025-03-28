/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Record Cypress Studio', () =>{ 
    let tiempo=1500

    // Lo mismo pero para el alias pero se necesita una promesa
    it('Record Cypress Studio', () =>{
        cy.visit("https://dev.masrentacar.com/en/index")
        cy.title().should('eq','Car Rental in Mexico without Credit Card - Mas Rent a Car')
        cy.wait(tiempo)




        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://dev.masrentacar.com/en/index');
        cy.get('.wrapper-pickup > .react-autosuggest__container > div > .react-autosuggest__input').clear();
        cy.get('.wrapper-pickup > .react-autosuggest__container > div > .react-autosuggest__input').type('gdl');
        cy.get('#react-autowhatever-autosuggest_pickup-section-0-item-0 > span').click();
        cy.get('.check-custom').click();
        cy.get('.wrapper-drop > .react-autosuggest__container > div > .react-autosuggest__input').clear('c');
        cy.get('.wrapper-drop > .react-autosuggest__container > div > .react-autosuggest__input').type('canc');
        cy.get('#react-autowhatever-autosuggest_dropoff-section-0-item-0 > :nth-child(2)').click();
        cy.get('#inputPickupDdate').click();
        cy.get('.rez-form > .container').click();
        cy.get('#inputPickupDdate').click();
        cy.get('#pickers-container').click();
        cy.get('#btn-timepicker > span').click();
        cy.get('.pl-2 > :nth-child(13)').click();
        cy.get('[aria-label="Choose Thursday, April 3, 2025 as your check-in date. It’s available."]').click();
        cy.get(':nth-child(3) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__defaultCursor').click();
        cy.get(':nth-child(3) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__defaultCursor').click();
        cy.get(':nth-child(3) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__defaultCursor').click();
        cy.get(':nth-child(3) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__defaultCursor').click();
        cy.get('#inputDropoffDdate').click();
        cy.get('.rez-form > .container').click();
        cy.get('#inputDropoffDdate').click();
        cy.get('#btn-timepicker > span').click();
        cy.get('.pl-2 > :nth-child(37)').click();
        cy.get('[aria-label="Choose Tuesday, April 8, 2025 as your check-out date. It’s available."]').click();
        cy.get('button[class="btn search"]').should("be.visible").click({force: true})
        

       /* cy.get(':nth-child(4) > .car-card-grid > .wrapper-packages > :nth-child(2) > .package-card > .btn').click();
        cy.get(':nth-child(3) > .amount-extra > .extra-desc > .wrapper-btn > a > svg').click();
        cy.get('.wrapper-continue > button').click();

        
        cy.get('[placeholder="First name"]').clear('A');
        cy.get('[placeholder="First name"]').type('Ana');
        cy.get('[placeholder="Last name"]').clear('F');
        cy.get('[placeholder="Last name"]').type('Fernández');
        cy.get('.input-email').clear('a');
        cy.get('.input-email').type('anafernandez.9217@gmail.com');
        cy.get('.wrapper-terms-conditions > .check-custom-wrapper > .check-custom').click();
        cy.get('.form-control').clear('3');
        cy.get('.form-control').type('3311777082');
        cy.get('.wrapper-confirmation-whatsapp > .check-custom-wrapper > .check-custom').click();
        cy.get('[placeholder="License number"]').clear('6');
        cy.get('[placeholder="License number"]').type('36292312');
        cy.get('[placeholder="State"]').clear('J');
        cy.get('[placeholder="State"]').type('Jalisco');
        cy.get('[placeholder="Country"]').clear('M');
        cy.get('[placeholder="Country"]').type('Mexico');
        cy.get('[placeholder="Flight number"]').clear('A');
        cy.get('[placeholder="Flight number"]').type('AB1234');
        cy.get('[placeholder="Airline"]').clear('D');
        cy.get('[placeholder="Airline"]').type('Delta');
        cy.get('textarea').click();*/
        /* ==== End Cypress Studio ==== */
    })

});