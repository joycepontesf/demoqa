describe('Alerts, Frame & Windows', () => {

    it('Should open a new tab', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('/')

        cy.contains('.card', 'Alerts, Frame & Windows').click()
        cy.contains('li', 'Browser Windows').click()

        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })

        cy.get('#windowButton').click()

        cy.url().should('include', 'sample') 
        cy.contains('This is a sample page').should('be.visible')

        cy.go('back')
        cy.contains('Browser Windows').should('be.visible')
    })
})