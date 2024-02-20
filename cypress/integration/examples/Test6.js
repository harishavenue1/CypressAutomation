describe('My Calendar Test Suite', ()=>{
    it('My Calendar Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

        // calendar
        const month = "6";
        const date = "15";
        const year = "2027";
        const dateList = [month, date, year]
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button', year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(month-1)).click()
        cy.get('.react-calendar__month-view__days__day').eq(Number(date)).click()

        //assertion
        cy.get('.react-date-picker__inputGroup__input').each(($el, index)=>{
            // get attribute
            cy.wrap($el).invoke('val').should('eq', dateList[index])
        })


    })
})