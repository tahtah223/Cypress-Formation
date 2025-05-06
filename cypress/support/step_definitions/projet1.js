// <reference types="cypress" />

const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

Given("je visite l'application" , ()=>{
cy.visit("https://todomvc.com/examples/react/dist/#/")
});
When("je saisis {string} à la liste" , (tache1)=>{
    cy.get('.new-todo').type(tache1)   
});
And("je clique sur la touche entrer" , ()=>{
    cy.get("form").type("{enter}");
});
And("je saisis {string} à la liste" , (tache2)=>{
    cy.get('.new-todo').type(tache2)   
        });
And("je saisis {string} à la liste" , (tache3)=>{
    cy.get('.new-todo').type(tache3)   
 });
Then("je devrai avoir mes 3 tâches qui ce sont ajoutés", ()=>{
    cy.get('.todo-item-label').should(($labels) => {
        expect($labels.eq(0)).to.contain.text('tache1');
        expect($labels.eq(1)).to.contain.text('tache2');
        expect($labels.eq(2)).to.contain.text('tache3');
    });
    });