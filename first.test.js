/// <reference types="cypress" />

describe('My First Test', () => {
    it('Gets, types and asserts', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()
        
        //Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        //Get an input, type into it and verufy that the value has been updated
        cy.get('.action-email').type('example@gmail.com')

        cy.get('.action-email').should('have.value', 'example@gmail.com')
    })
})