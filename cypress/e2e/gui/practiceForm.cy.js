import { faker } from '@faker-js/faker';

describe('Practice Form', () => {
    const testData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        userEmail: faker.internet.email(),
        gender: '3',
        userNumber: faker.string.numeric(10),
        dateOfBirth: '2000',
        subjects: 'english',
        month: '4',
        hobbies: '2',
        file: 'cypress/fixtures/exampleFile.txt',
        currentAddress: faker.location.streetAddress(),
        state: 'Haryana',
        city: 'Panipat'
    }

    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('/')
        cy.accessPage('Forms')
        cy.chooseMenuItem('Practice Form')
    })

    it('Should fill and submit the form successfully', () => {
        cy.fillPracticeForm(testData.firstName, testData.lastName, testData.userEmail, testData.gender, testData.userNumber, testData.dateOfBirth, testData.subjects, testData.month, testData.hobbies, testData.file, testData.currentAddress, testData.state, testData.city)
        
        cy.clickButton('submit')
        
        cy.contains('Thanks for submitting the form').should('be.visible')
        
        cy.closeModal()

        cy.contains('Thanks for submitting the form').should('not.exist')
    })
})