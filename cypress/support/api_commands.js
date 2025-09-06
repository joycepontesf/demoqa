
Cypress.Commands.add('createUser', (username, password) => {
    cy.request({
        method: 'POST',
        url: '/Account/v1/User',
        body: {
            "userName": username,
            "password": password
        }
    })
})

Cypress.Commands.add('generateToken', (username, password) => {
    cy.request({
        method: 'POST',
        url: '/Account/v1/GenerateToken',
        body: {
            "userName": username,
            "password": password
        }
    })
})

Cypress.Commands.add('authorizeUser', (username, password) => {
    cy.request({
        method: 'POST',
        url: '/Account/v1/Authorized',
        body: {
            "userName": username,
            "password": password
        }
    })
})

Cypress.Commands.add('listBooks', () => {
    cy.request({
        method: 'GET',
        url: '/BookStore/v1/Books'
    })
})

Cypress.Commands.add('rentBook', (userId, firstIsbn, secondIsbn, token) => {
    cy.request({
        method: 'POST',
        url: '/BookStore/v1/Books',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: {
            "userId": userId,
            "collectionOfIsbns": [
                {
                    "isbn": firstIsbn
                },
                {
                    "isbn": secondIsbn
                }
            ]
        }
    })
})

Cypress.Commands.add('userDetails', (userId, token) => {
    cy.request({
        method: 'GET',
        url: `/Account/v1/User/${userId}`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
})