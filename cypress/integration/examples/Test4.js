describe('My Fourth Test Suite', ()=>{
    it('My Fourth Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // working with web tables, rows and columns
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

        // click without mouse hover (invisible)
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')

        // mouse hover and click
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

    })
})