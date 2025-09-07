import { faker } from '@faker-js/faker'

describe('Elements', () => {
    const testData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        userEmail: faker.internet.email(),
        age: faker.string.numeric(2),
        salary: faker.string.numeric(6),
        department: faker.person.jobTitle(),
        editName: faker.person.firstName()
    }

    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('/')
        cy.accessPage('Elements')
        cy.chooseMenuItem('Web Tables')
    })
    
    it('Should create, edit and delete a record', () => {
        cy.clickButton('addNewRecordButton')
        cy.openRegistrationForm()
        cy.fillWebTables(testData.firstName, testData.lastName, testData.userEmail, testData.age, testData.salary, testData.department)
        cy.saveForm()
        
        cy.verifyRowExists(testData.firstName)
        
        cy.tableRowAction('.rt-table', testData.firstName, 'edit')
        cy.openRegistrationForm()
        cy.fillWebTables(testData.editName, testData.lastName, testData.userEmail, testData.age, testData.salary, testData.department)
        cy.saveForm()
        
        cy.verifyRowExists(testData.editName)
        cy.tableRowAction('.rt-table', testData.editName, 'delete')
        cy.verifyRowExists(testData.editName, false)
    })
})