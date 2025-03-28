/// <reference types="Cypress" />

require('cypress-xpath')

describe("Nueva sección Select ", () =>{
    it("Select uno ", () =>{
        cy.visit("https://testsheepnz.github.io/panther-build5.html#calculator ")
        cy.wait(2000)

        cy.get("#numMissiles").should("be.visible").select("2")
        cy.wait(2000)
        cy.get("#numMissiles").should("be.visible").select("4").should("have.value","4")

    })

    it.only("Index principal ", () =>{
        let time= 3000;
        let timeLong= 5000;
        cy.visit("https://dev3.mexrentacar.com/es/index ")
        cy.title().should('eq','Renta de autos en México, Estados Unidos y otros destinos - Mex Rent a Car')
        cy.wait(time)
        //cy.get("#numMissiles").should("be.visible").select("4").should("have.value","4")
        cy.get('#rez-form-wrapper > form > div:nth-child(1) > div > div:nth-child(2) > input').should("be.visible").type('GDL - Guadalajara Aeropuerto, Guadalajara, Jalisco, México')
        cy.get('#react-autowhatever-autosuggest_pickup-section-0-item-0 > :nth-child(2)').should("be.visible").click()
        cy.wait(time)
        cy.get(':nth-child(1) > .react-autosuggest__container > .wrapper-diff-btn').should("be.visible").click()
        cy.get(':nth-child(5) > .react-autosuggest__container > [style="grid-area: data; display: flex; width: 100%;"] > .react-autosuggest__input').should("be.visible").type('GDL2 - Guadalajara  Chapalita, Guadalajara, Jalisco, México')
        cy.xpath('//*[@id="react-autowhatever-autosuggest_dropoff-section-0-item-0"]').should("be.visible").click()//
        cy.wait(time)
  
        // Intentando cambiar horario //
        //cy.get("span").should("be.visible").select("9:00 am")
        //cy.get("[type='i']").should("contain","9:00 am")
        //cy.get('#btn-timepicker > span').should("be.visible").select("01:00 pm")
        //cy.get('li').eq(2).should('be.visible').click() // 

        // Seleccionar intervalo de fechas
        cy.get('#btn-timepicker > span').should("be.visible").click()
        cy.wait(time)
        cy.xpath('//*[@id="btn-timepicker"]/div/div/li[27]').should("be.visible").click()
        cy.wait(time)
        cy.get('[aria-label="Choose Friday, March 28, 2025 as your check-in date. It’s available."]').should("be.visible").click()
        cy.wait(time)
        cy.get('#btn-timepicker > span').should("be.visible").click()
        cy.wait(time)
        cy.xpath('//*[@id="btn-timepicker"]/div/div/li[31]').should("be.visible").click()
        cy.wait(time)
        cy.get('[aria-label="Choose Sunday, March 30, 2025 as your check-out date. It’s available."]').should("be.visible").click()
        cy.wait(time)
        // Seleccion de unidad
        cy.get('.wrapper-mex-form-input-btn > .ml-auto').should("be.visible").click()
        cy.wait(timeLong)
        cy.get('#card_3 > div > div').should("be.visible").click()
        cy.wait(time)

        // Elegir los adicionales
        cy.get(':nth-child(3) > [style="display: flex; flex-direction: column; overflow: hidden;"] > .additional-item-main').should("be.visible").click()
        cy.wait(time)
        cy.get('#additional-item-total > .btn-confirm').should("be.visible").click()
        cy.wait(time)

        // Pantalla de información del lado izquierdo
        cy.get('#client-firstname').should("be.visible").type('Ana')
        cy.get(':nth-child(2) > .mx-2').should("be.visible").type('Fernández')
        cy.get(':nth-child(3) > .mx-2').should("be.visible").type('anafernandez.9217@gmail.com')
        cy.wait(time)
        cy.get(':nth-child(4) > .mx-4 > .check-custom').should("be.visible").click()
        cy.wait(timeLong)

        // Pantalla de información del lado derecho
        cy.get('.form-control').should("be.visible").type('3311777082')
        cy.get('.d-flex > .mx-4 > .check-custom').should("be.visible").click()
        cy.wait(time)
        cy.get(':nth-child(4) > .mx-2').should("be.visible").type('R0004772')
        cy.get('.mt-5 > :nth-child(2) > :nth-child(5)').should("be.visible").type('México')
        cy.get(':nth-child(6) > .mx-2').should("be.visible").type('Jalisco')
        cy.wait(time)
        cy.get(':nth-child(7) > .mx-2').should("be.visible").type('A8737')
        cy.get(':nth-child(8) > .mx-2').should("be.visible").type('Aeromexico')
        cy.get('.form-textarea-client-control > .mx-2').should("be.visible").type('El cliente llega de abordar vuelo internacional preveniente de California y acude a la renta de la unidad.')
        cy.wait(time)

        // Envio de Input final: btn-confirm
        //cy.get(':nth-child(11) > .btn-confirm').should( 'exist')
        cy.get(':nth-child(11) > .btn-confirm').should("be.visible").click()
        cy.wait(time)
        // Para grabar video
        //npx cypress run --spec cypress\e2e\Seccion_0\MexReservacion.cy.js
  
    })

})
