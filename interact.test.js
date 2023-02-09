/// <reference types="cypress" />

describe('Browser Actions', () => {
    it('Should load website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000})
        cy.url().should('include', 'index.html')        
    });

    it('Should click on Keep me signd in', () => {
        cy.get('#user_remember_me').click()
    });
});