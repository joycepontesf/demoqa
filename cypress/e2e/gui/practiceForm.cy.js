import { faker } from '@faker-js/faker';

describe('Practice Form', () => {

    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('/')
    })

    it('Should fill the form', () => {

        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const userEmail = faker.internet.email()
        const gender = '3'
        const userNumber = faker.string.numeric(10)
        const yearOfBirth = '2000'
        const subjects1 = 'english'
        const subjects2 = 'math'
        const month = '4'
        const hobbies = '3'
        const file = 'cypress/fixtures/exampleFile.txt'
        const currentAddress = faker.location.streetAddress()
        const state = 'Haryana'
        const city = 'Panipat'

        cy.accessPage('Forms')
        cy.chooseMenuItem('Practice Form')

        cy.fillForm(firstName, lastName, userEmail, gender, userNumber, yearOfBirth, subjects1, subjects2, month, hobbies, file, currentAddress, state, city)
        
        cy.clickButton('submit')
        
        cy.contains('Thanks for submitting the form').should('be.visible')
       
        cy.clickButton('closeLargeModal')
    })
})