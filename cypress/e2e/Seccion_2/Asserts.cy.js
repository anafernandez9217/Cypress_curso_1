// Para que funcionen los comandos
/// <reference types="Cypress" />

describe("Asserts ", () =>{
    it("Assert contains ", () =>{
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

        cy.get('#accordian > div:nth-child(1) > div.panel-heading > h4 > a').contains("Women").click()
    })

    it("Assert find, eq", () =>{
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

        cy.get('.features_items > :nth-child(5)').find(".nav nav-pills nav-justified").eq(0).click()
    })

    it("Assert find, eq", () =>{
        cy.visit("https://www.automationexercise.com/product_details/3")
        cy.title().should('eq','Automation Exercise - Product Details')
        cy.wait(1000)

        // Letra e para
        cy.get('.product-information').then((e)=>{
            //cy.log(e.text())
            let estado=e.text()
            //cy.log(estado)
            if(estado.includes("New")){
                cy.log("El vestido es Nuevo")
            }

        })
    })

    //newarrival
    it("Assert find, eq", () =>{
        cy.visit("https://www.automationexercise.com/product_details/4")
        cy.title().should('eq','Automation Exercise - Product Details')
        cy.wait(1000)

        // Letra e para
        cy.get('.product-information').then((e)=>{
            cy.log(e.text())
            let estado=e.text()
            cy.log(estado)
            /*if(estado.includes("New")){
                cy.log("El vestido es Nuevo")
            }*/

        const split = estado.split('Rs. ') 
        const toke = split[1] 
        const preci = toke.split('Quantity') 
        const precio = preci[0] 
        cy.log(precio)

        if(precio > 1000){
            cy.log("El vestido sale de nuestro presupuesto, no lo podemos comprar")
            cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click({force: true})
            cy.wait(3000)
        }else{
            cy.log("El vestido esta en nuestro presupuesto, continua con la compra")
            cy.get(':nth-child(5) > .btn').click()
            cy.wait(5000)
        }

        })
    })

    it("Assert contain.text y have.text", () =>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)
        
        cy.get('#nombre').should("be.visible").type("Hana")
        cy.get('#apellidos').should("be.visible").type("Nero")
        cy.get('#tel').should("be.visible").type("3311777082")
        cy.get('#email').should("be.visible").type("hana_nero@gmail.com")
        cy.get('#direccion').should("be.visible").type("Toronja 123")
        cy.get('.btn-primary').should("be.visible").click()

        cy.get('#nombre').should("have.text","")
        cy.get('#nombre').should("contain.text","")
    })

    it("Assert contain.text mas then", () =>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)

        cy.get('#nombre').should("be.visible").type("Hana")

        cy.get('#nombre').should("contain.value","Hana").then(()=>{
            cy.get('#apellidos').should("be.visible").type("Nero")
            cy.get('#tel').should("be.visible").type("3311777082")
            cy.get('#email').should("be.visible").type("hana_nero@gmail.com")
            cy.get('#direccion').should("be.visible").type("Toronja 123")
            cy.get('.btn-primary').should("be.visible").click()
        })

    })

    it("Assert have.class", () =>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)

        // La clase debe tener
        cy.get('#nombre').should("be.visible").should("have.class", "form-control").then(()=>{
            cy.get('#nombre').should("be.visible").type("Hana")
        })

    })

    it("Assert have.class y la función and", () =>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)

        // Obliga el sistema a que tenga las dos vertientes para poder pasar al then
        cy.get('#nombre').should("be.visible").and("have.class", "form-control").then(()=>{
            cy.get('#nombre').should("be.visible").type("Hana")
        })

    })

    it("Assert have.class y la función and", () =>{
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(1000)

        // No pasa
        /*cy.get('#nombre').should("not.be.visible").and("have.class", "form-control").then(()=>{
            cy.get('#nombre').should("be.visible").type("Hana")
        })*/

        // Pasa
        cy.get('#nombre').should("be.visible").and("not.have.class", "forme-control").then(()=>{
            cy.get('#nombre').should("be.visible").type("Hana")
        })

    })

    it("Assert length y el css", () =>{
        cy.visit("https://datatables.net/examples/basic_init/alt_pagination.html")
        cy.title().should('eq','DataTables example - Alternative pagination')
        cy.wait(1000)

        // Colocar lo ancho de la tabla por medio de css, se mide logitud y se validan lo css
        cy.get('#example > tbody >tr').should("have.length", 10)
        cy.get('#example > tbody >tr >td').should("have.length", 60).and("have.css", "padding", "8px 10px")

    })

    it("Contains", () =>{
        let tiempo=3000
        
        cy.visit("https://djaboo.com/es/blog/creer-un-pop-up-en-javascript-guide-et-exemples-expliques/")
        //cy.title().should('eq','DataTables example - Alternative pagination')
        cy.wait(tiempo)

        // El contain, al querer agarrar un elemento como tal, se toma el tipo del un elemento del contenedor, 
        // busca un boton que contenga lo siguiente, utilizar un asert para realizar una selección
        cy.contains("[type='submit']", "Comience gratis 🚀").should("not.be.visible").click({force:true})
        // Eliminando ventana
        cy.get('#popmake-1412 > button').should("be.visible").click({force:true})

        cy.get('#mgt-menu-item-1215 > a').should("be.visible").type("Versión de prueba gratuita")


    })

    
})