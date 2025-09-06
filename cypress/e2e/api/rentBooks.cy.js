import data from '../../fixtures/userData.json'
import isbnData from '../../fixtures/isbnData.json'

describe('Rent Books', () => {

    let userId = data.userId
    let firstIsbn = isbnData.books[0].isbn
    let secondIsbn = isbnData.books[1].isbn
    let username = data.username
    let password = data.password
    let token

    beforeEach(() => {
        cy.generateToken(username, password)
            .then((response) => {
                token = response.body.token
            })
    })

    it('Should rent a book', () => {
        cy.rentBook(userId, firstIsbn, secondIsbn, token)
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('books')
                expect(response.body.books).to.be.an('array').and.to.have.lengthOf.at.least(2)
                expect(response.body.books[0].isbn).to.eq(firstIsbn)
                expect(response.body.books[1].isbn).to.eq(secondIsbn)
            })
    })
})