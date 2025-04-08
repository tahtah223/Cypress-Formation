/// <reference types="cypress" />
describe('Difference entre les commandes Jquery et Cypress', () => {

    // Cypress.config('defaultCommandTimeout',20000)
  
      it.only('Utiliser les commandes Jquery et Cypress', () => {
        cy.visit('/', {timeout:30000})
  
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
  
        // cy.wait(1000)
          cy.get(".oxd-sidepanel-body").wait(1000).contains("Admin",/*{timeout: 15000}*/).click();
    
    
    })
    })
     