/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Api consulta GET.', () =>{ 
    let tiempo=1500
    let datos

    it('Api metodo POST', () =>{
        cy.wait(tiempo)
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            // Una vez le pasamos el metOdos y url, se deben pasar las cabeceras
            // Es importante decirle que tipo de salida o dato estamos esperando
            body:{
                "id": 9,
                "title": "Insertando un valor en Cypress Api",
                "author": "Juan Perez"
            }
        }).then(response => { 
            expect(response.status).to.eql(201)

        })
        cy.wait(tiempo)

    })

    it('API POST INSERTAR POR CICLO', () =>{
        cy.wait(tiempo)
        for(let x=1; x<=3; x++){
            let tx=Math.random().toString(5)
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",

                body:{
                    "id": 13+x,
                    "title": "Titulo #"+tx,
                    "author": "Author #"+tx
                }
            }).then(response => { 
                expect(response.status).to.eql(201)
    
            })
            cy.wait(tiempo)
        }

    })

    it('Api metodo PUT modificando un Valor', () =>{
        cy.wait(tiempo)
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2",
            body:{
                "title": "Modificando Katalon Estudio-",
                "author": "Juanja Bravo"
            }
        }).then(response => { 
            expect(response.status).to.eql(200)

        })
        cy.wait(tiempo)

    })

    it('Delete un campo desde la Api', () =>{
        cy.wait(tiempo)
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/9",
        }).then(response => { 
            expect(response.status).to.eql(200)

        })
        cy.wait(tiempo)

    })

    it.only('Delete varios campos desde la Api', () =>{
        cy.wait(tiempo)
        for(let x=5; x<=6; x++){
            cy.request({
                method: "DELETE",
                url: "http://localhost:3000/posts/"+x,

            }).then(response => { 
                expect(response.status).to.eql(200)
    
            })
            cy.wait(tiempo)
        }

    })

    

});