// Para que funcionen los comandos
/// <reference types="Cypress" />

describe(" ", () =>{
    it(" ", () =>{
        cy.visit(" ")


    })

})

//-----------------------------------------------------------------------
//            *   COMANDOS DE CMD   *
//-----------------------------------------------------------------------

// 1.- cypress.json donde configurar todo
// archivo especial donde configurar memoria, capacidad el ancho de la memoria,tiempo de espera
// seguridad no seguridad, que campos va aceptar, donde van a salir los siguientes videos


// Todo lo que fuiste haciendo session por sesion, lo que se tarda, la validaciones, cuales pasan y cuales no
// Desde consola lanzar todos los aplicativos
// 2.- node_modules\.bin\cypress run        o el  
// 3.- comando npx cypress run --headed (lo mismo pero desde el navegador)
// 4.- correr todos los ejemplos pero desde un navegador en especifico:
// comando npx cypress run --browser chrome // edge

// Comando para como correr algun ejemplo en especifico de cy.js
// 5.- npx cypress run --spec "cypress\e2e\Seccion_2\Asserts.cy.js"


// Comando para hacer correr todos los ejecutables de una sesión
// 6.- npx cypress run --spec "cypress\e2e\Seccion_2\*"