describe('My Second Test Suite', ()=>{
    it('My Second Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // check
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        // uncheck
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // check multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // dropdowns
        // static
        cy.get('select').select('Option2').should('have.value','option2')

        // dynamic
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list)=>{
            if($el.text()==='India') {
                $el.click();
            }
        })

        // visible check
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio button
        cy.get('[value="radio2"]').check().should('be.checked')

        // alert
        cy.get('#alertbtn').click() // automatically handled the alert popup - auto accepts
        cy.get('#confirmbtn').click()

        // window alert - browser event
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})