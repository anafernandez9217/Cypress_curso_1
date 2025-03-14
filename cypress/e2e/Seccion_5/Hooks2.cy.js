/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Hooks de Ejemplos', () =>{ 
    let tiempo=2000
    before(()=> {
        cy.visit("https://basicos.codica.la/languages/html/lessons/checkbox")
        cy.title().should('eq',"Casillas de Verificación | HTML | CodeBasics")
        //cy.wait(tiempo)
    })
    it('Test uno', () =>{
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(tiempo)
    })

    it('Test dos', () =>{
        cy.visit("https://basicos.codica.la/languages/html/lessons/checkbox")
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
        cy.wait(tiempo)
    })

    
    it('Test tres', () =>{
        //cy.reload()
        cy.visit("https://basicos.codica.la/languages/html/lessons/checkbox")
        cy.xpath("/html/body/main/div/div[1]/div/div/div[1]/div/div/div[2]/div[1]/form/label[1]/input").check()
        cy.wait(tiempo)
    })

    //*[@id="lesson-tab"]/div/div/div[2]/div[1]/form/label[1]/input

});