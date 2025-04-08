/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  // on retourne false pour empêcher l'échec du test
  return false;
});

describe("Gestion des boites de dialogue avec Cypress", () => {
  it("Gestion des alertes avec Cypress", () => {
    cy.visit("https://demoqa.com/alerts");
    cy.get("#alertButton").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("You clicked a button");
    });
  });
});
it("Gestion des alertes prompt avec cypress", () => {
  cy.visit("https://demoqa.com/alerts", {
    onBeforeLoad(win) {
      cy.stub(win, "prompt").returns("Message alerte");
    },
  });
  cy.get("#promtButton").click();
});

it("Gestion de la boite de dialogue confirm", () => {
  cy.visit("https://demoqa.com/alerts");

  cy.get("#confirmButton").click();
  cy.on("window:confirm", (text) => {
    expect(text).to.equal("Do you confirm action?");
    return false; //true pour ok et false pour cancel
  });
});

it("exo 1 Vérifie que l'alerte apparaît après 5 secondes", () => {
  cy.visit("https://demoqa.com/alerts");

  cy.window().then((win) => {
    const startTime = Date.now(); // démarrer le chrono
    cy.stub(win, "alert")
      .callsFake((message) => {
        const elapsedTime = Date.now() - startTime;
        // Vérifie le message d'alerte
        expect(message).to.equal("This alert appeared after 5 seconds");
        // Vérifie que le temps écoulé est proche de 5 secondes
        expect(elapsedTime).to.be.within(4900, 6000); // marge de sécurité
        cy.log(`L'alerte est apparue après ${elapsedTime} ms`);
      })
      .as("alertStub");

    cy.get("#timerAlertButton").click();
  });
});

it("Exo 2 : Gestion de la boite de dialogue ", () => {
  cy.visit("https://demoqa.com/alerts");

  cy.get("#confirmButton").click();

  // Afficher et vérifier ce qu'il y a dans le confirmResult
  cy.get("#confirmResult")
    .should("be.visible")
    .then(($result) => {
      const resultText = $result.text();
      cy.log("Le texte affiché est : " + resultText);
    });
});

it("Exo 3 : Gestion de la boite de dialogue boutton prompt ", () => {
  const monNom = "DIALLO";

  cy.visit("https://demoqa.com/alerts", {
    onBeforeLoad(win) {
      cy.stub(win, "prompt").returns(monNom);
    },
  });
  cy.get("#promtButton").click();

  // Afficher et vérifier ce qu'il y a dans PromptResult
  cy.get("#promptResult")
    .should("be.visible")
    .then(($result) => {
      const resultText = $result.text();
      cy.log("Le texte affiché est : " + resultText);
    });
});

it("Exo 3 : Gestion de la boite de dialogue boutton prompt ANNULER ", () => {
  /* cy.visit('https://demoqa.com/alerts')
        cy.get('#promtButton').click();
        return false;
        cy.on('window:confirm',(text)=>{
            expect(text).to.equal('Please enter your name')
            return false; //true pour ok et false pour cancel

        });
    }); */
  cy.visit("https://demoqa.com/alerts", {
    onBeforeLoad(win) {
      cy.stub(win, "prompt").returns("null");
    },
  });
  cy.get("#promtButton").click();
  cy.contains("Message alerte").should("not.exist");
});
/* // Afficher et vérifier ce qu'il y a dans PromptResult
cy.get('#promptResult')
.should('be.visible')
.then(($result) => {
  const resultText = $result.text();
  cy.log('Le texte affiché est : ' + resultText);
});
}); */
