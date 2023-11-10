import 'cypress-file-upload';

Cypress.Commands.add("SignIn", () => {
    cy.visit('/#/login')
    cy.title().should('eq', 'Gmail')
    cy.location('protocol').should('eq', 'https:')
    cy.get('form').within(($form) => {
        // cy.get() will only search for elements within form, not within the entire document
        cy.get('input[type = "email"]').type('sampletestCypress@gmail.com')
        cy.get('input[type = "password"]').type('Cypress!')
        cy.root().submit()   // submits the form yielded from 'within'
    })
    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
})