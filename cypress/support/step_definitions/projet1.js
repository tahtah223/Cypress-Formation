// <reference types="cypress" />

const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps");
Given("je visite l'application" , ()=>{
cy.visit("https://todomvc.com/examples/react/dist/#/")
});
When("je saisis la tâche {string} à la liste" , (tache1)=>{
    cy.get('.new-todo').type(tache1)   
});
And("je clique sur la touche entrer" , ()=>{
    cy.get('.new-todo').type('{enter}');
});
And("je saisis la tâche {string} à la liste" , (tache2)=>{
    cy.get('.new-todo').type(tache2)   
        });

And("je saisis la tâche {string} à la liste" , (tache3)=>{
    cy.get('.new-todo').type(tache3)   
 });

Then("je devrai avoir mes tâches {string} {string} et {string} qui se sont ajoutées", (tache1,tache2,tache3)=>{
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]')
    cy.contains(tache1).should('exist');
    cy.contains(tache2).should('exist');
    cy.contains(tache3).should('exist');
});
//Marquer une tâches comme complétee
When("je clique sur le cercle à gauche de la tâche {string}", (tache1) => {
    cy.contains('[data-testid="todo-item-label"]', tache1).should('be.visible')
      .parents('[data-testid="todo-item"]')
      .find('[data-testid="todo-item-toggle"]')
      .click();
  });
And("le texte de la tâche {string} doit être barré", (tache1)=>{
    cy.contains('[data-testid="todo-item-label"]', tache1)
    .should('have.css', 'text-decoration')
    .and('contain', 'line-through');
});
And("le cercle à gauche de la tâche {string} doit être coché", (tache1)=>{
    cy.contains('[data-testid="todo-item-label"]', tache1)
    .parents('[data-testid="todo-item"]')
    .find('[data-testid="todo-item-toggle"]')
    .should('be.checked')
});
Then("la tâche {string} doit apparaître comme complétée", (tache1) => {
    cy.contains('[data-testid="todo-item-label"]', tache1)
      .closest('[data-testid="todo-item"]')
      .should('have.class', 'completed'); 
});
//
When("je clique sur le filtre {string}", (filtre) => {
    cy.get('[data-testid="footer-navigation"] a')
    .contains(filtre)
    .should('be.visible')
    .click();
    });
Then("les tâches complétées ne doivent pas être visibles", () => {
    cy.get('[data-testid="todo-item-label"]').each(($el) => {
    cy.wrap($el).should('not.have.class', 'completed');
        });
      });

Then("seules les tâches complétées doivent être visibles", () => {
        cy.get('[data-testid="todo-item"]').each(($el) => {
        cy.wrap($el).should('have.class', 'completed').should('be.visible');
            });
          });   
Then("toutes les tâches doivent être visibles", () => {
        cy.get('[data-testid="todo-item"]').each(($el) => {
        cy.wrap($el).should('be.visible');
            });
          });  
//Modifier une Tâche
When("je double-clique sur une tâche active", () => {
        cy.get('[data-testid="todo-item"]')
          .not('.completed')
          .first()
          .find('[data-testid="todo-item-label"]')
          .dblclick();
      });
And("je Modifie le texte de la tâche en {string}", (modifTache) => {
         cy.get('.view > .input-container > [data-testid="text-input"]')            
          .clear()
          .type(modifTache)
      });
And("j'appuie sur Enter pour sauvegarder la modification", () => {
        cy.get('.view > .input-container > [data-testid="text-input"]')            
            .type('{enter}');

          });   
       
Then("je vérifie que le texte de la tâche a été mis à jour en {string}", (modifAttendu) => {
        cy.get('[data-testid="todo-item-label"]')
        .should('contain.text', modifAttendu);
          }); 
//Supprimer une Tâche
When("je survole une tâche, le bouton X doit apparaître", () => {
    cy.get('.destroy')
    .invoke('show')
    .should('be.visible');
  });
And("je clique sur X pour supprimer une tâche", () => {         
    cy.get('[data-testid="todo-item-button"]')
        .first()
        .click()    
 });  
Then("la tâche {string} n'apparaît plus dans la liste", (tache1) => {         
    cy.get('[data-testid="todo-item-label"]').should('not.contain.text', tache1);
    
 });  
 //Effacer les Tâches Complétées
 When("je marque plusieurs tâches en complétées", () => {
    cy.get('[data-testid="todo-item"]')
    .each(($el, index) => {
      if (index < 2) {
        cy.wrap($el)
        .find('[data-testid="todo-item-toggle"]')
        .click();
    }
      });
    });
And("je clique sur le bouton Clear completed", () => {         
    cy.get('.clear-completed')           
        .click()    
     });       
Then("mes tâches {string} et {string} complétées ont été retirées de la liste", (tache1, tache2) => {         
        cy.get('a').should('not.contain.text', tache1);
        cy.get('a').should('not.contain.text', tache2);
     });  