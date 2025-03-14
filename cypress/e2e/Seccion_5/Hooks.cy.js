

describe("Hooks", () =>{

    before(() => {
        cy.log("########## -- Principio de todo--- ########## Esto inicia antes que todo solo una vez")
    })

    beforeEach(() => {
        cy.log("Esto se repite en cada uno de los test muy importante")
    })

    afterEach(() => {
        cy.log("Esto se hace al final de todos los test")
    })

    after(() => {
        cy.log("########## Ultimo Ciclo --- Final de todo ##########")
        cy.wait(2000)
        cy.title().should('eq',"Formulario de Ejemplo")
    })

    it("Test uno", () => {
        cy.log("Test uno")
    })

    it("Test dos", () => {
        cy.log("Test dos")
    })

    it("Test tres", () => {
        cy.log("Test tres")
    })

})