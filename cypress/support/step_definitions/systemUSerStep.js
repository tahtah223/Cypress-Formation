/// <reference types="cypress" />

const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

Given("je suis sur la page de connexion" , ()=>{
    cy.intercept('POST','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users').as('addUser')
   cy.intercept('PUT','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users/*').as('modifUser')
cy.visit("https://opensource-demo.orangehrmlive.com/")
});
Given("j'ai saisi {string} comme nom d'utilisateur et {string} comme mot de passe" , (user, password)=>{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user)
   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
});
When("je clique sur le bouton de connexion" , ()=>{
    cy.get('.oxd-button').click()
});
Then("je devrais être redirigé vers le tableau de bord" , ()=>{
cy.url().should('include','/dashboard')
        });
Then("je devrais voir {string} dans l'en-tête" , (dashboard)=>{
    cy.get('h6').should('contain.text','Dashboard')
            });
Then("l'élément {string} dans le menu devrait être actif", (dashboard)=>{
    cy.get('a').contains('Dashboard').parent().should('have.class',"oxd-main-menu-item active")
});
// when("j'attends 500 millisecondes", ()=>{
// cy.wait(500)
// });
// when("j'attends {int} millisecondes", (temps)=>{
//     cy.wait(temps)
//     });
When("j'attends {int} millisecondes", (temps) => {
    cy.wait(Number(temps));
});
// when("je clique sur {string} dans le menu", (menuOption)=>{
//     cy.get('a').contains(menuOption).click()
//     });
When("je clique sur {string} dans le menu", (menuOption) => {
    cy.get('a').contains(menuOption).should('exist').should('be.visible').click();
});

Then("je devrais voir les éléments suivants dans le filtre du tableau", (dataTable)=>{
    dataTable.hashes().forEach(element => {
        cy.get('.oxd-table-filter').should('contain.text', element.Element)
    });
    });
Then("le champ de recherche devrait être visible", ()=>{
            cy.get('.oxd-input').should('be.visible')
        });

        // exercice 

// When("je clique sur {string} dans le menu" , ()=>{
//     cy.get('.oxd-main-menu-item').click()
// });
When("je clique sur le bouton pour ajouter un utilisateur" , ()=>{
    cy.get('.orangehrm-header-container > .oxd-button').click()
});
When("je remplis le formulaire avec les détails de l'utilisateur" , ()=>{
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
});
When("je clique sur le bouton pour enregistrer l'utilisateur" , ()=>{
    cy.get('.oxd-button--secondary').click()
});
Then("une requête POST devrait être envoyée pour ajouter l'utilisateur" , ()=>{
    cy.wait('@addUser')
});

When("je recherche l'utilisateur {string}", (userName)=>{
    cy.get(':nth-child(2) > .oxd-input').type(userName)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
});
Then("l'utilisateur {string} devrait apparaître dans les résultats de recherche", (userName)=>{
    cy.get('.oxd-table-card').should('contain', userName)
});

When("je change son nom en {string}", (newUserName)=>{
    //cy.wait(1000)
    cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(newUserName)
    //cy.wait(1000)
    cy.get('.oxd-button--secondary').click()
});
Then("une requête PUT devrait être envoyée pour modifier l'utilisateur", ()=>{
    cy.wait('@modifUser');
});
When("je clique sur {string} dans le menu" , ()=>{
    cy.get('.oxd-main-menu-item').click()
});
When("je recherche et sélectionne l'utilisateur {string}", (newUser)=>{
    cy.get(':nth-child(2) > .oxd-input').type(newUser)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
});
When("je clique sur le bouton de suppression", ()=>{
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
    cy.get('.oxd-button--label-danger').click()
});
Then("l'utilisateur {string} devrait être supprimé", (userName)=>{
    cy.contains(userName).should('not.exist')
});