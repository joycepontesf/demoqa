import data from '../../fixtures/userData.json'
import isbnData from '../../fixtures/isbnData.json'

describe('User Details', () => {

    let userId = data.userId
    let username = data.username
    let password = data.password
    let firstIsbn = isbnData.books[0].isbn
    let secondIsbn = isbnData.books[1].isbn
    let token

    beforeEach(() => {
        cy.generateToken(username, password)
            .then((response) => {
                token = response.body.token
            })
    })

    it('Should get user details', () => {
        cy.userDetails(userId, token)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('userId').and.to.eq(userId)
                expect(response.body).to.have.property('books').and.to.be.an('array').and.to.have.lengthOf.at.least(2)
                expect(response.body.books[0].isbn).to.eq(firstIsbn)
                expect(response.body.books[1].isbn).to.eq(secondIsbn)
            })
    })
})