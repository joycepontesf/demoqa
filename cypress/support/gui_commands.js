Cypress.on('uncaught:exception', (err, runnable) => {
  // ignora erros de scripts de terceiros
  if (err.message.includes('Script error')) {
    return false
  }
})

Cypress.Commands.add('stubWindowOpen', () => {
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url
    })
  })
})

Cypress.Commands.add('accessPage', (pageName) => {
  cy.visit('/')
  cy.contains('.card', pageName).click()
})

Cypress.Commands.add('chooseMenuItem', (item) => {
  cy.contains('li', item).click()
})

Cypress.Commands.add('fillForm', (firstName, lastName, userEmail, gender, userNumber, dateOfBirth, subjects1, subjects2, month, hobbies, file, currentAddress, state, city) => {

  const hobbiesMap = {
    Sports: 1,
    Reading: 2,
    Music: 3
  }

  cy.get('#firstName').type(firstName)
  cy.get('#lastName').type(lastName)
  cy.get('#userEmail').type(userEmail)
  cy.get(`[for="gender-radio-${gender}"]`).click()
  cy.get('#gender-radio-3').check()
  cy.get('#userNumber').type(userNumber)
  cy.get('#dateOfBirthInput').click()
  cy.get('.react-datepicker__year-select').select(dateOfBirth)
  cy.get('.react-datepicker__day-names').click()
  cy.get('.react-datepicker__month-select').select(month)
  cy.get('[aria-label="Choose Wednesday, May 10th, 2000"]').click()
  cy.get('.subjects-auto-complete__value-container').click()
  cy.get('#subjectsInput').type(subjects1)
  cy.get('#react-select-2-option-0').click()
  cy.get('#subjectsInput').type(subjects2)
  cy.get('#react-select-2-option-0').click()
  cy.get(`[for="hobbies-checkbox-${hobbies}"]`).click()
  cy.get('#uploadPicture').selectFile(file)
  cy.get('#currentAddress').type(currentAddress)
  cy.get('#state').click().contains(state).click()
  cy.get('#city').click().contains(city).click()
})

Cypress.Commands.add('clickButton', (buttonId) => {
  cy.get(`#${buttonId}`).click()
})