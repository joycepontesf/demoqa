describe('Alerts, Frame & Windows', () => {

    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('/')
    })

    it('Should open a new tab', () => {
        cy.accessPage('Alerts, Frame & Windows')
        cy.chooseMenuItem('Browser Windows')
        cy.stubWindowOpen()

        cy.clickButton('windowButton')

        cy.url().should('contains', 'sample')
        cy.contains('This is a sample page').should('be.visible')

        cy.go('back')
        cy.contains('Browser Windows').should('be.visible')
    })
})