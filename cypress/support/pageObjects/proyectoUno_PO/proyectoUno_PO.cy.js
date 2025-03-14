//import proyectoUno_PO from './proyectoUno_PO.cy.js'

class ProyectoUno_PO{

    visiHome(){
        let tiempo=1000
        Cypress.config("defaultCommandTimeout",15000)
        before(()=>{
            cy.visit('https://validaciones.rodrigovillanueva.com.mx/Campos_Dos_OK.html'),
            cy.title().should('eq','Formulario de Ejemplo')
            cy.wait(tiempo)
        })
    }

    SeccionUno(letras,alfanumerico,correo,t){
        let tiempo=t
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Campos_Dos_OK.html'),
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)
        //let tiempo=t
        cy.xpath('//*[@id="onlyLetters"]').should('be.visible').type(letras)
        cy.wait(tiempo)
        cy.xpath('//*[@id="alphanumeric"]').should('be.visible').type(alfanumerico)
        cy.wait(tiempo)
        cy.xpath('//*[@id="emailFormat"]').should('be.visible').type(correo)
        cy.wait(tiempo)
        cy.screenshot("Campos captura")
        
    }

    SeccionDos(url,fecha,t){
        let tiempo=t
        /*cy.visit('https://validaciones.rodrigovillanueva.com.mx/Campos_Dos_OK.html'),
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)*/
        //let tiempo=t
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Campos_Dos_OK.html'),
         // Timeout hace que nuestros asserts esten esperando un campo en especifico
        cy.xpath('//*[@id="urlFormat"]').should('be.visible', {timeout:5000}).type(url)
        cy.wait(tiempo)
         // Timeout hace que nuestros asserts esten esperando un campo en especifico
        cy.xpath('//*[@id="dateFormat"]').should('be.visible', {timeout:5000}).type(fecha)
        cy.wait(tiempo)
         // Timeout hace que nuestros asserts esten esperando un campo en especifico
        cy.get('.btn-primary').should('be.visible', {timeout:5000}).click({force: true})
        cy.wait(tiempo)
        
    }



}//final

export default ProyectoUno_PO;