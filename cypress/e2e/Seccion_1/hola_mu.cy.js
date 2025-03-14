describe("Bienvenido al curso de Cypress sección 1", () =>{

  it("Mi primer Test -> Hola mundo", () =>{
      cy.log("Hola mundo")// para imprimir en pantalla
      cy.wait(2000)
  
  })

  it("Segundo test -> campo name", () =>{
    cy.visit("https://demoqa.com/text-box")
    cy.wait(2000)
    cy.get('#userName').type('Hana')
    cy.wait(2000)// Elemento id se selecciona con el gato# y clase con el punto.


  })

})//Cierre de describe

