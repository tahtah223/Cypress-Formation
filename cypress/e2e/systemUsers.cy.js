/// <reference types="Cypress" />


describe("Gestion des utilisateurs système ",()=>{

  beforeEach('Login',()=>{
   cy.intercept('POST','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users').as('addUser')
   cy.intercept('PUT','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users/*').as('modifUser')
   cy.visit('https://opensource-demo.orangehrmlive.com/')
   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
   cy.get('.oxd-button').click()

cy.get('a').contains('Admin').click()
  })

it.skip("Vérification de l'authentification",()=>{
cy.get('h6').should('contain.text','Dashboard')
cy.get('a').contains('Dashboard').parent().should('have.class',"oxd-main-menu-item active")

})

it("Vérification page Admin",()=>{
cy.wait(500)
cy.get('a').contains('Admin').click()
cy.get('.oxd-table-filter').should('contain.text','System Users')
cy.get('.oxd-table-filter').should('contain.text','Username')
cy.get('.oxd-table-filter').should('contain.text','User Role')
cy.get('.oxd-table-filter').should('contain.text','Employee Name')
cy.get('.oxd-table-filter').should('contain.text','Status')
cy.get('.oxd-table-filter').should('contain.text','Reset')
cy.get('.oxd-table-filter').should('contain.text','Search')
cy.get('.oxd-input').should('be.visible')

})

it("Ajout d'un utilisateur",()=>{

cy.get('.orangehrm-header-container > .oxd-button').click()
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
cy.get('[role="listbox"]').contains('Admin').click()
cy.get('.oxd-autocomplete-text-input > input').type('le')
cy.wait(1500)
cy.get('[role="listbox"]').first().click()
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
cy.get('[role="listbox"]').contains('Enabled').click()
cy.wait(1000)
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('AdminCypress')
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
cy.get('.oxd-button--secondary').click()

cy.wait('@addUser')
})

it("Recherche utilisateur crée",()=>{
cy.get(':nth-child(2) > .oxd-input').type('AdminCypress')
cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})

})

it("Modification utilisateur crée",()=>{

cy.get(':nth-child(2) > .oxd-input').type('AdminCypress')
cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
cy.wait(1000)
cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('AdminCypress2')
cy.wait(1000)
cy.get('.oxd-button--secondary').click()

cy.wait('@modifUser')

})

it("Suppression utilisateur modifié",()=>{

cy.get(':nth-child(2) > .oxd-input').type('AdminCypress2')
cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
cy.wait(1000)
cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
cy.get('.oxd-button--label-danger').click()

})

})