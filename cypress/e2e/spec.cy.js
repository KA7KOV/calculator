describe ("Test", () => {
    it("Simple Operations", () => {
        cy.visit('http://localhost:3000');
        cy.get('#result').as('input')
            .should('have.value', '0');
        cy.get('#equal').as('equal')

        // +
        cy.get('@input')
            .type('1+1')
            .should('have.value', '1+ 1')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '2')
        cy.get('#expression').as('expression')
            .should('have.text', '1+ 1')

        // -
        cy.get('@input')
            .type('1-1')
            .should('have.value', '1- 1')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '0')
        cy.get('#expression').as('expression')
            .should('have.text', '1- 1')
        
        // *
        cy.get('@input')
            .type('2*3')
            .should('have.value', '2* 3')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '6')
        cy.get('#expression').as('expression')
            .should('have.text', '2* 3')
        // /
        cy.get('@input')
            .type('10/2')
            .should('have.value', '10/ 2')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '5')
        cy.get('#expression').as('expression')
            .should('have.text', '10/ 2')
        
        // %
        cy.get('@input')
            .type('10')
        cy.get('#percent').as('percent')
                .click()
        cy.get('@input')
            .should('have.value', '10%')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '0.1')
        cy.get('#expression').as('expression')
            .should('have.text', '10%')

        // √
        cy.get('#sqrt').as('sqrt')
                .click()
        cy.get('@input')
            .type('9')
        cy.get('@input')
            .should('have.value', '√ 9')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '3')
        cy.get('#expression').as('expression')
            .should('have.text', '√ 9')
    })

    it("Multiple Operations", () => {
        cy.visit('http://localhost:3000');
        cy.get('#result').as('input')
            .should('have.value', '0');
        cy.get('#equal').as('equal')

        // +*
        cy.get('@input')
            .type('5+8*2')
            .should('have.value', '5+ 8* 2')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '21')
        cy.get('#expression').as('expression')
            .should('have.text', '5+ 8* 2')

        // -*
        cy.get('@input')
            .type('(5-10)*7')
            .should('have.value', '(5- 10)* 7')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '-35')
        cy.get('#expression').as('expression')
            .should('have.text', '(5- 10)* 7')
        
        // */
        cy.get('@input')
            .type('2*3/6')
            .should('have.value', '2* 3/ 6')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '1')
        cy.get('#expression').as('expression')
            .should('have.text', '2* 3/ 6')
        // //
        cy.get('@input')
            .type('10/2/2*4')
            .should('have.value', '10/ 2/ 2* 4')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '10')
        cy.get('#expression').as('expression')
            .should('have.text', '10/ 2/ 2* 4')
        
        // %
        cy.get('@input')
            .type('10')
        cy.get('#percent').as('percent')
                .click()
        cy.get('@input')
            .should('have.value', '10%')
        cy.get('@input')
            .type('*100')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '10')
        cy.get('#expression').as('expression')
            .should('have.text', '10% * 100')
    })

    it("Simple Operations By Clicks", () => {
        cy.visit('http://localhost:3000');
        cy.get('#result').as('input')
            .should('have.value', '0');
        cy.get('#equal').as('equal')

        // +
        cy.get('#seven')
            .click()
        cy.get('@input')
            .should('have.value', '7')
        cy.get('#plus').as('plus')
            .click()
        cy.get('@input')
            .should('have.value', '7 +')
        cy.get('#five')
            .click()
        cy.get('@input')
            .should('have.value', '7 + 5')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '12')
        cy.get('#expression').as('expression')
            .should('have.text', '7 + 5')

        // -
        cy.get('#seven')
            .click()
        cy.get('@input')
            .should('have.value', '7')
        cy.get('#minus').as('minus')
            .click()
        cy.get('@input')
            .should('have.value', '7 -')
        cy.get('#five')
            .click()
        cy.get('@input')
            .should('have.value', '7 - 5')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '2')
        cy.get('#expression').as('expression')
            .should('have.text', '7 - 5')


        // *
        cy.get('#seven')
            .click()
        cy.get('@input')
            .should('have.value', '7')
        cy.get('#multiple').as('multiple')
            .click()
        cy.get('@input')
            .should('have.value', '7 *')
        cy.get('#five')
            .click()
        cy.get('@input')
            .should('have.value', '7 * 5')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '35')
        cy.get('#expression').as('expression')
            .should('have.text', '7 * 5')

        // /
        cy.get('#two')
            .click()
        cy.get('#seven')
            .click()
        cy.get('@input')
            .should('have.value', '27')
        cy.get('#divider').as('divider')
            .click()
        cy.get('@input')
            .should('have.value', '27 /')
        cy.get('#nine')
            .click()
        cy.get('@input')
            .should('have.value', '27 / 9')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '3')
        cy.get('#expression').as('expression')
            .should('have.text', '27 / 9')

        // 00 %
        cy.get('#one')
            .click()
        cy.get('#doubleZero')
            .click()
        cy.get('@input')
            .should('have.value', '100')
        cy.get('#percent').as('percent')
            .click()
        cy.get('@input')
            .should('have.value', '100%')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '1')
        cy.get('#expression').as('expression')
            .should('have.text', '100%')

        // coren
        cy.get('#sqrt')
            .click()
        cy.get('#nine')
            .click()
        cy.get('@input')
            .should('have.value', '√ 9')
        cy.get('@equal')
            .click()
        cy.get('@input')
            .should('have.value', '3')
        cy.get('#expression').as('expression')
            .should('have.text', '√ 9')

        cy.get('#clear')
            .click()
        cy.get('@input')
            .should('have.value', '0')
    })
})