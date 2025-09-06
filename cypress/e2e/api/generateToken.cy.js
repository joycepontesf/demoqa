import data from '../../fixtures/userData.json'

describe('Generate Token', () => {

    let username = data.username
    let password = data.password

    it('Should generate a token', () => {
        cy.generateToken(username, password)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('token')
                expect(response.body).to.have.property('result').and.to.eq('User authorized successfully.')
            })
    })
})