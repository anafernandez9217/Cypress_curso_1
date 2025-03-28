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

    it('Test Api Get metodo dos', () =>{
        cy.wait(tiempo)
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            // Una vez le pasamos el metOdos y url, se deben pasar las cabeceras
            // Es importante decirle que tipo de salida o dato estamos esperando
            headers:{
                accept: "application/json"
            }
            // Todo esta funcion esta convirtiendo estos tipos de datos en un archivo leible 
        }).then(response => { // Todo es la forma correcta de hacer la consulta
            cy.wait(tiempo)
            let dato;
            //item!=="undefined"
            dato=JSON.parse(JSON.stringify(response.body))

            cy.log(dato)

            // se parametriza y pasando los datos que se eestan esperando, metodo
            expect(dato[0]).has.property("id",1)
            expect(dato[0]).has.property("title","json-server-")
            //expect(datos[0]).has.property("author","typicode")// Raro

        })

    })

});