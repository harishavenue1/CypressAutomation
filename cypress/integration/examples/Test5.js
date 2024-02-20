import 'cypress-iframe'

describe('My Fifth Test Suite', ()=>{
    it('My Fifth Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // move to frame
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })
})