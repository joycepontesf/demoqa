describe('List Books', () => {
    
    it('Should list books', () => {
        cy.listBooks()
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('books')
                expect(response.body.books).to.be.an('array').and.to.have.lengthOf.at.least(1)
            })
    })
})