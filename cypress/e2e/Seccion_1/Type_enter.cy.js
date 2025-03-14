/// <reference types="Cypress" />

describe("Funciones para Type ", () =>{
    it("Type --> ENTER ", () =>{
        /*cy.visit(" https://www.google.com")
        cy.title().should('eq',"Google")
        cy.wait(1500)

        cy.get("[name='q']").type("cypress io {enter} ")*/
        cy.visit("https://www.google.com/search?q=cypress+io&sca_esv=c03163c7c9a53b28&sxsrf=AHTn8zqgjTErfewSWHWsGCx3roAOZiZ_sA%3A1738966011372&source=hp&ei=-4OmZ_H6E9XSkPIPzdejoA4&iflsig=ACkRmUkAAAAAZ6aSCxmYNZG6nmJbwWfRfLrVzcgxrxvd&ved=0ahUKEwix5IabybKLAxVVKUQIHc3rCOQQ4dUDCBc&uact=5&oq=cypress+io&gs_lp=Egdnd3Mtd2l6IgpjeXByZXNzIGlvMgUQABiABDIGEAAYFhgeMgYQABgWGB4yCBAAGBYYChgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSP-wugFQuAhYxq66AXACeACQAQKYAdQBoAHFDqoBBjUuMTEuMbgBA8gBAPgBAvgBAZgCDqACoAuoAgrCAgcQIxgnGOoCwgIFEAAY7wXCAgsQLhiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIOEC4YgAQYsQMY0QMYxwHCAgQQIxgnwgIREC4YgAQYsQMYxwEYjgUYrwHCAggQLhiABBixA8ICCxAuGIAEGLEDGNQCwgILEC4YgAQYxwEYrwHCAgUQLhiABMICERAuGIAEGMcBGJgFGJkFGK8BmAMI8QWZEj1C2XS2f5IHBjMuMTAuMaAH4L8B&sclient=gws-wiz")
        cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click
       

    })

})