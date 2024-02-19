describe('My First Test Suite', ()=>{
    it('My FirstTest Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        
        // way1
        cy.get('.product:visible').should('have.length',4)

        // alias - call a element via '@'symbol
        cy.get('.products').as('productLocator')

        // way2 - parent,child chaining via find method
        cy.get('@productLocator').find('.product').should('have.length',4)

        // fetch specific element
        cy.get('@productLocator').find('.product').each(($el, index, $list)=>{
            const txt = $el.find('.product-name').text()
            if (txt.includes('Cashew')) {
                // on find method, click is depricated, so added wrap
                cy.wrap($el).find('button').click()
            }
        })

        // validate text for logo
        cy.get('.brand').should('have.text','GREENKART')

        // click cart
        cy.get('.cart-icon img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})