Given('Abrir el navegador principal',()=>{
    cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
})

When('Cargando el nombre', ()=>{
    cy.get('#nombre').should('be.visible').type('Hana')
    cy.wait(1000)
})

When('Cargando el apellido', ()=>{
    cy.get('#apellidos').should('be.visible').type('Nero')
    cy.wait(1000)
})

When('Cargando el telefono', ()=>{
    cy.get('#tel').should('be.visible').type('3311777082')
    cy.wait(1000)
})

When('Cargando el email', ()=>{
    cy.get('#email').should('be.visible').type('hana_9217@gmail.com')
    cy.wait(1000)
})

And('Cargando la direccion', ()=>{
    cy.get('#direccion').should('be.visible').type('Rubens 5185')
    cy.wait(1000)
})

Then('Validar el nombre de la Página', ()=>{
    cy.title().should('eq','Formulario de Ejemplo')
    cy.wait(1500)
})
