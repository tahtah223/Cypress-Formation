/// <reference types="cypress" />

const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");


Given("je visite la page de Connexion" , ()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/")
});
When("je saisis des identifiants valides" , ()=>{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
});
When("je clique sur le bouton login" , ()=>{
    cy.get('.oxd-button').click()
});
Then("je devrai être redirigé vers le tableau de bord" , ()=>{
cy.url().should('include','/web')
}); 

When("je saisis des identifiants invalides" , ()=>{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admi')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
});

Then("je devrai voir le message d'erreur {string}" , (messageErreur)=>{
    cy.contains(messageErreur).should('be.visible');
});