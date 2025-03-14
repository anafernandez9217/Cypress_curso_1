/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto de la función Hooks', () =>{ 
    let tiempo=1000
    beforeEach(() => {  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.title().should('eq','OrangeHRM')
        cy.wait(tiempo)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin')
        cy.wait(tiempo)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        cy.wait(tiempo)
        cy.get('.oxd-button').should('be.visible').click({force: true})
        cy.wait(tiempo)
    })
    it('Test uno', () =>{
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span').click({force: true})
        cy.wait(tiempo)

    })

    it('Test dos', () =>{
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get(':nth-child(3) > .oxd-main-menu-item').should('be.visible').click({force: true})
        cy.wait(tiempo)

    })

    it('Test tres', () =>{
        cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').should('be.visible').click({force: true})
        cy.wait(tiempo)

    })

    after(() => {
        cy.log("########## Ultimo Ciclo --- Final de todo ##########")
        cy.wait(2000)
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span').should('be.visible').click({force: true})
        cy.wait(tiempo)
        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a').should('be.visible').click({force: true})
        cy.wait(tiempo)
    })

});