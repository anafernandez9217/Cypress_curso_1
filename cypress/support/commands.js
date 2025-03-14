// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("Campo_visible", (selector,texto,t) => {
    let tiempo=t
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add("Campo_visible_xpath", (selector,texto,t) => {
    let tiempo=t
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add("Click", (selector,t) => {
    let tiempo=t
    cy.xpath(selector).should('be.visible').click()
})

Cypress.Commands.add("Click_force_xpath", (selector,t) => {
    let tiempo=t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
})

// Validar variable email
Cypress.Commands.add("Validar_campo", (selector,men,nombre_campo,t) => {
    let tiempo=t
    cy.xpath(selector).should('be.visible').then((val)=> {
        let dato=val.text()// convierto lo escrito en el campo a texto para tomarlo y comparar
        let mensaje=men
        //dato= "Please supply a valid address"
        cy.log(dato)
        expect(dato).to.equal(mensaje)
        if(dato==mensaje){
            cy.log("##################")
            cy.log("El "+  nombre_campo +" no es valido")
            cy.log("##################")

        }

    })

})

// Validar variable letras
Cypress.Commands.add("Validar_campo_letras", (selector,men,nombre_campo,t) => {
    let tiempo=t
    cy.xpath(selector).should('be.visible').then((val)=> {
        let dato=val.text()
        let mensaje=men
        //dato= "Please supply a valid address"
        cy.log(dato)
        expect(dato).to.equal(mensaje)
        if(dato==mensaje){
            cy.log("##################")
            cy.log("El "+  nombre_campo +" no es valido")
            cy.log("##################")

        }

    })

})



// Funciones por conjunto o completas //
// Creando la funcion  //

Cypress.Commands.add("Bloque_formulario", (nombre,apellidos,tel,email,dir,t) => {
    let tiempo=t
    cy.get('#nombre').should('be.visible').type(nombre)
    cy.wait(tiempo)
    cy.get('#apellidos').should('be.visible').type(apellidos)
    cy.wait(tiempo)
    cy.get('#tel').should('be.visible').type(tel)
    cy.wait(tiempo)
    cy.get('#email').should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get('#direccion').should('be.visible').type(dir)
    cy.wait(tiempo)
    cy.get('.btn-primary').should('be.visible').click({force: true})
    cy.wait(tiempo)

})

Cypress.Commands.add("Bloque_Reto_Form", (letras,alfanumerico,correo,url,fecha,t) => {
    let tiempo=t
    cy.xpath('//*[@id="onlyLetters"]').should('be.visible').type(letras)
    cy.wait(tiempo)
    cy.xpath('//*[@id="alphanumeric"]').should('be.visible').type(alfanumerico)
    cy.wait(tiempo)
    cy.xpath('//*[@id="emailFormat"]').should('be.visible').type(correo)
    cy.wait(tiempo)
    cy.xpath('//*[@id="urlFormat"]').should('be.visible').type(url)
    cy.wait(tiempo)
    cy.xpath('//*[@id="dateFormat"]').should('be.visible').type(fecha)
    cy.wait(tiempo)
    cy.get('.btn-primary').should('be.visible').click({force: true})
    cy.wait(tiempo)
})

