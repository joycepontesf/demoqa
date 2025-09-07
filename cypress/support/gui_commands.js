Cypress.on('uncaught:exception', (err, runnable) => {
  // ignora erros de scripts de terceiros
  if (err.message.includes('Script error')) {
    return false
  }
})