/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Api consulta GET.', () =>{ 
    let tiempo=1500
    let datos

    it('Test Api Get', () =>{
        // Se espera dentro de la consulta un status 200, lo que quiere decir que la consulta esta funcionando correctamente
        datos=cy.request("http://localhost:3000/posts")
        datos.its("status").should("equal",200)
        cy.wait(tiempo)
    })

    it('Test Api Get 2', () =>{
        // Se espera dentro de la consulta un status 200, lo que quiere decir que la consulta esta funcionando correctamente
        datos=cy.request("http://localhost:3000/posts")
        // Con la funcion flecha vamos esperar el status, pasando una o más variables
        .should((response)=> {
            expect(response.status).to.eq(200)

        })
    })

});