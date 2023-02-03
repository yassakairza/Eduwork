/// <reference types="cypress" />

describe('My First Test', () => {
    it('clicking "type shows the right headings', () => {
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('type').click()
        //Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/action')

        //Get an input, type into it and verufy that the value has been updated
        cy.get('.action-email').type('example@gmail.com')

        cy.get('.action-email').should('have.value', 'example@gmail.com')
    })

})