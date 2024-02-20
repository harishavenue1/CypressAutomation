describe('My Third Test Suite', ()=>{
    it('My Third Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // instead of opening a new tab, remove attribute target from that element
        // and click to view contents on same tab
        cy.get('#opentab').invoke('removeAttr','target').click()

        // if origin changed,then update to cy, else it wont allow to continue
        cy.origin("https://www.qaclickacademy.com", ()=>{
            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
        })
    })
})