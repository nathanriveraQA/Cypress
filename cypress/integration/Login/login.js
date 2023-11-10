Given('I open Gmail login page', () => {
    cy.visit('https://gmail.com')
  });
  
  When('I type in', (datatable) => { 
    datatable.hashes().forEach(element => {
        cy.get('input[type="email"]').type(element.username)
        cy.get('input[type="password"]').type(element.password)
    })
  })
  
  When('I click on Sign in button', () => {
    cy.get('.btn').contains('Next').should('be.visible').click()
  });
  
  Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
  });