/// <reference types="Cypress" />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe(" Cypress eventos Mouse", () =>{
    it("Drag and Drop ", () =>{
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title("eq", "The Internet")

        cy.wait(3000)

        cy.get("#column-a").drag("#column-b",{force:true})// El force para garantizar que se realize afuezas
    })

    it("Drag and Drop 2", () =>{
        let tiempo=1500
        cy.visit("https://www.desarrollolibre.net/blog/html/el-drag-and-drop-en-html5-javascript")
        //cy.title("eq", "Selenium Easy Demo - Drag and Drop Demo")
        cy.wait(tiempo)

        cy.get("#caja1").drag("#contenedor",{force:true})// El force para garantizar que se realize afuezas
        cy.get("#caja2").drag("#contenedor",{force:true})

    })

    it("Drag and Drop 2", () =>{
        let tiempo=1500
        cy.visit("https://www.msn.com/es-mx")
        //cy.title("eq", "Selenium Easy Demo - Drag and Drop Demo")
        cy.wait(tiempo)

        // Debe contener la palabra
        cy.contains("Obtener ahora").trigger('mouseover')
        cy.wait(tiempo)
        //cy.contains("Obtener ahora").click()
        cy.contains("Obtener ahora").invoke("removeAttr","target").click()

        /*cy.get("#banner-button1").trigger('mouseover')
        cy.wait(tiempo)
        cy.get("#banner-button1").click()*/
        //cy.contains("Obtener ahora").invoke("removeAttr","target").click()

        //
    })

    it.only("Slider", () =>{
        let tiempo=1800
        //cy.visit("https://www.w3schools.com/howto/howto_js_rangeslider.asp")
        cy.visit("https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_rangeslider")
        cy.title("eq", "Topics Frame")
        cy.wait(tiempo)

       /*cy.get('#id2').invoke("attr","value","80")
       cy.wait(tiempo)
       cy.get('#id1').invoke("attr","value","80")
       cy.wait(tiempo)
       cy.get('#id3').invoke("attr","value","50")*/

       // Cambia de lugar el rango de la barra
       //cy.get('body > div > input[type=range]:nth-child(2)').invoke("attr","value","80")
       //cy.wait(tiempo)
       cy.get('#getwebsitebtn').invoke("attr","value","90")
       //cy.wait(tiempo)
       

    })

})