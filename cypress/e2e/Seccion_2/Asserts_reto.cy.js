/// <reference types="Cypress" />

describe("Reto Asserts ", () =>{
    it("Reto Asserts ", () =>{
        let tiempo=1000

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)

        let a="Hana"
        let b="Nero"

        cy.get("#nombre").should("be.visible").and("have.class","form-control").type(a)
        cy.get("#apellidos").should("be.visible").and("have.class","form-control").type(b)
        cy.get('#tel').should("be.visible").type("3311777082")
        cy.get('#email').should("be.visible").type("hana_nero@gmail.com")
        cy.get('#direccion').should("be.visible").type("Toronja 123")

        cy.contains("[type='submit']","Enviar").click()// Boton incluye esa palabra

        cy.get('.btn-primary').should("be.visible").click()// Se envia el formulario

        cy.get('#flashMessage').should("be.visible").then((e)=>{
            let r="Se ha enviado correctamente"
            cy.log(e.text())
            let res=e.text()

            if(r===res){
                cy.log("Son iguales")
            }else{
                cy.log("El resultado es incorrecto")
            }

        })

        

    })

    it("Reto Asserts Parte dos", () =>{
        let tiempo=1300

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)

        let a="Hana"
        let b="Nero"

        cy.get("#nombre").should("be.visible").and("have.class","form-control").type(a)
        cy.wait(tiempo)
        cy.get("#apellidos").should("be.visible").and("have.class","form-control").type(b)
        cy.wait(tiempo)
        cy.get('#tel').should("be.visible").type("3311777082")
        cy.get('#email').should("be.visible").type("hana_nero@gmail.com")
        cy.get('#direccion').should("be.visible").type("Toronja 123")

        cy.contains("[type='submit']","Enviar").click()// Boton incluye esa palabra

        cy.get('.btn-primary').should("be.visible").click()// Se envia el formulario

        cy.get('#flashMessage').should("be.visible").then((e)=>{
            let r="Se ha enviado correctamente"
            cy.log(e.text())
            let res=e.text()

            if(r===res){
                cy.log("Son iguales")
            }else{
                cy.log("El resultado es incorrecto")
            }

            let resp= 60
            if(resp > 50)
            {
                a=a+" Adicionar"
                b=b+" Nero"
                cy.get("#nombre").should("be.visible").and("have.class","form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get("#apellidos").should("be.visible").and("have.class","form-control").clear().type(b)
                cy.contains("[type='submit']","Enviar").click()// Boton incluye esa palabra

                //cy.get('.btn-primary').should("be.visible").click()// Se envia el formulario
            }

        })

        

    })

    
    it("Reto Asserts Parte tres", () =>{
        let tiempo=1600

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/index.html")
        cy.title().should('eq','Formulario de Ejemplo')
        cy.wait(tiempo)

        let a="Hana"
        let b="Nero"

        cy.get("#nombre").should("be.visible").and("have.class","form-control").type(a)
        cy.wait(tiempo)
        cy.get("#apellidos").should("be.visible").and("have.class","form-control").type(b)
        cy.wait(tiempo)
        cy.get('#tel').should("be.visible").type("3311777082")
        cy.get('#email').should("be.visible").type("hana_nero@gmail.com")
        cy.get('#direccion').should("be.visible").type("Toronja 123")

        cy.contains("[type='submit']","Enviar").click()// Boton incluye esa palabra

        cy.get('.btn-primary').should("be.visible").click()// Se envia el formulario

        cy.get('#flashMessage').should("be.visible").then((e)=>{
            let r="Se ha enviado correctamente"
            cy.log(e.text())
            let res=e.text()

            if(r===res){
                cy.log("Son iguales")
            }else{
                cy.log("El resultado es incorrecto")
            }

            cy.get("#myForm > button.btn.btn-secondary").click()
            let resp= 60
            if(resp > 50)
            {
                a=a+" Adicionar"
                b=b+" Nero"
                // Buscar que tenga el siguiente atributo
                cy.get("#nombre").invoke("attr","class").should("contain","form-control").then(()=>{
                    cy.get("#nombre").clear().type(a)
                    cy.wait(tiempo)
                    // Invoca el atributo, si es que lo tiene
                    cy.get("#nombre").invoke("attr", "style", "color:red")
                })
                cy.wait(tiempo)
                cy.get("#apellidos").should("be.visible").and("have.class","form-control").clear().type(b)
                cy.wait(tiempo)
                // Invoca el atributo, si es que lo tiene
                cy.get("#apellidos").invoke("attr", "style", "color:blue")
                cy.wait(tiempo)
                cy.contains("[type='submit']","Enviar").click()// Boton incluye esa palabra

                //cy.get('.btn-primary').should("be.visible").click()// Se envia el formulario

                cy.get('#flashMessage').should("be.visible").then((e)=>{
                    cy.get('#flashMessage').invoke("attr","style","color:purple")
                })
            }

        })

        

    })

})