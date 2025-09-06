import data from '../../fixtures/userData.json'

describe('Authorize User', () => {

    let username = data.username
    let password = data.password

    it('Should authorize a user', () => {
        cy.authorizeUser(username, password)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq(true)
            })
    })
})