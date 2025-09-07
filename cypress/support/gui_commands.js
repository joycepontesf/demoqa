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

Cypress.Commands.add('fillPracticeForm', (firstName, lastName, userEmail, gender, userNumber, dateOfBirth, subjects, month, hobbies, file, currentAddress, state, city) => {

  const hobbiesMap = {
    Sports: 1,
    Reading: 2,
    Music: 3
  }

  cy.get('#firstName').clear().type(firstName)
  cy.get('#lastName').clear().type(lastName)
  cy.get('#userEmail').clear().type(userEmail)
  cy.get(`[for="gender-radio-${gender}"]`).click()
  cy.get('#gender-radio-3').check()
  cy.get('#userNumber').clear().type(userNumber)
  cy.get('#dateOfBirthInput').click()
  cy.get('.react-datepicker__year-select').select(dateOfBirth)
  cy.get('.react-datepicker__day-names').click()
  cy.get('.react-datepicker__month-select').select(month)
  cy.get('[aria-label="Choose Wednesday, May 10th, 2000"]').click()
  cy.get('.subjects-auto-complete__value-container').click()
  cy.get('#subjectsInput').type(subjects)
  cy.get('#react-select-2-option-0').click()
  cy.get(`[for="hobbies-checkbox-${hobbies}"]`).click()
  cy.get('#uploadPicture').selectFile(file)
  cy.get('#currentAddress').clear().type(currentAddress)
  cy.get('#state').click().contains(state).click()
  cy.get('#city').click().contains(city).click()
})

Cypress.Commands.add('clickButton', (buttonId) => {
  cy.get(`#${buttonId}`).click()
})

Cypress.Commands.add('fillWebTables', (firstName, lastName, userEmail, age, salary, department) => {
  cy.get('#firstName').clear().type(firstName)
  cy.get('#lastName').clear().type(lastName)
  cy.get('#userEmail').clear().type(userEmail)
  cy.get('#age').clear().type(age)
  cy.get('#salary').clear().type(salary)
  cy.get('#department').clear().type(department)
})

Cypress.Commands.add('tableRowAction', (tableSelector, rowText, action = 'delete') => {
  const actionsMap = {
    delete: '[id^=delete-record-]',
    edit: '[id^=edit-record-]'
  }

  cy.get(tableSelector)
    .scrollTo('right')
    .contains('.rt-tr', rowText)
    .within(() => {
      cy.get(actionsMap[action]).click()
    })
})

Cypress.Commands.add('openRegistrationForm', () => {
  cy.get('#registration-form-modal').should('be.visible')
  cy.get('#firstName').should('be.enabled')
})

Cypress.Commands.add('saveForm', () => {
  cy.clickButton('submit')
  cy.get('#registration-form-modal').should('not.exist')
})

Cypress.Commands.add('editTableRow', (searchText, newFirstName) => {
  cy.tableRowAction('.rt-table', searchText, 'edit')
  cy.get('#firstName').clear().type(newFirstName)
  cy.saveForm()
})

Cypress.Commands.add('verifyRowExists', (text, shouldExist = true) => {
  const assertion = shouldExist ? 'contain' : 'not.contain'
  cy.get('.rt-tr').should(assertion, text).and('be.visible')
})

Cypress.Commands.add('closeModal', () => {
  cy.get('#closeLargeModal').click({force: true})
})

