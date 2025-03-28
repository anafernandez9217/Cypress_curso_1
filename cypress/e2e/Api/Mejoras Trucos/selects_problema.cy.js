/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Select Problema', () =>{
    it('Select uno', () =>{
        let tiempo=1000
        //cy.visit("https://demoqa.com/select-menu")
        //cy.title().should('eq',"Formulario de Ejemplo")
        cy.visit("https://demoqa.com/select-menu")
        cy.title().should('eq',"DEMOQA")
        cy.wait(tiempo)

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#withOptGroup > .css-yk16xz-control >.css-1w0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r > path').click({force: true});
        cy.get('#react-select-2-option-1-0').click();
        cy.wait(tiempo)
        cy.get('selectOne > .css-yk16xz-control >.css-1w0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click();
        cy.get('#react-select-3-option-0-4').click();
        cy.get('#oldSelectMenu').select('2')
        cy.get(':nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click();
        cy.get('#react-select-4-option-1').click();
        cy.wait(tiempo)
        cy.get('#selectMenuContainer > :nth-child(7)').click();
        cy.get('#cars').select(['saab']);
        cy.get('#cars').select(['saab', 'opel']);
        cy.wait(tiempo)
        /* ==== End Cypress Studio ==== */



    })

});