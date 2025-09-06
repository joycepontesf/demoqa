import data from '../../fixtures/userData.json'
import { faker } from '@faker-js/faker'

describe('Create User', () => {
    
    let usernameFaker = faker.person.firstName()
    let password = data.password

    it('Should create a user', () => {
        cy.createUser(usernameFaker, password)
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('userID')
                expect(response.body).to.have.property('username').and.to.eq(usernameFaker)
            })
    })
})