describe('Elements', () => {
    it('Should create a record', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('/')

        cy.contains('.card', 'Elements').click()
        cy.contains('li', 'Web Tables').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type('Principal')
        cy.get('#lastName').type('QA')
        cy.get('#userEmail').type('example@example.com')
        cy.get('#age').type('1000')
        cy.get('#salary').type('100000')
        cy.get('#department').type('Finance')
        cy.get('#submit').click()

        cy.get('.rt-tr').should('contain', 'Principal').and('be.visible')
        
        cy.get('.rt-table').scrollTo('right')
            .contains('.rt-tr', 'Principal')
            .within(() => {
                cy.get('[id^=edit-record-]').click()
            })

        cy.get('#registration-form-modal').should('be.visible')
        cy.get('#firstName').should('be.enabled')

        cy.get('#firstName').clear().type('QA')
        cy.get('#submit').click()

        cy.get('.rt-tr').should('contain', 'QA').and('be.visible')
        
        cy.get('.rt-table').scrollTo('right')
            .contains('.rt-tr', 'QA')
            .within(() => {
                cy.get('[id^=delete-record-]').click()
            })
        
        cy.get('.rt-tr').should('not.contain', 'QA')
    })
})