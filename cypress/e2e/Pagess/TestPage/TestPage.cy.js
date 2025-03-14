
Given('Abrir el navegador principal', ()=>{
    cy.visit("https://validaciones.rodrigovillanueva.com.mx/Form1.html")
})

When('Cargando el nombre {word}', (name)=>{
    cy.get('#nombre').should('be.visible').type(name)
    cy.wait(1000)
})

When('Cargando el apellido {word}', (lastName)=>{
    cy.get('#apellidos').should('be.visible').type(lastName)
    cy.wait(1000)
})

When('Cargando el telefono {word}', (tel)=>{
    cy.get('#tel').should('be.visible').type(tel)
    cy.wait(1000)
})

When('Cargando el email {word}', (email)=>{
    cy.get('#email').should('be.visible').type(email)
    cy.wait(1000)
})

And('Cargando la direccion {word}', (dir)=>{
    cy.get('#direccion').should('be.visible').type(dir)
    cy.wait(1000)
})

And('Click en el Button', ()=>{
    cy.get('.btn-primary').should('be.visible').click({force: true})
    cy.wait(1000)
})

Then('Validar el nombre de la Página', ()=>{
    cy.title().should('eq','Formulario de Ejemplo')
    cy.wait(1500)
})


/*
Given('Abrir el navegador principal', ()=>{
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

And('Click en el Button', ()=>{
    cy.get('.btn-primary').should('be.visible').click({force: true})
    cy.wait(1000)
})

Then('Validar el nombre de la Página', ()=>{
    cy.title().should('eq','Formulario de Ejemplo')
    cy.wait(1500)
})

*/