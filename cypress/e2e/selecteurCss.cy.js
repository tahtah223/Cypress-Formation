import CommunPO from "../support/pageObject/communPO";
describe("Sélecteur Css", () => {
  before(() => {
    const communPO = new CommunPO();
    communPO.visitPageAcceuil();
  });

it("Different type de sélecteur CSS", () => {
  // Sélecteurs basés sur les noms de balise

  cy.get("div");

  // Sélecteurs basés sur les classes
  cy.get(".oxd-grid-item");

  // Sélecteurs basés sur les identifiants

  cy.get("#app");

  // Sélecteurs basés sur les attributs

  cy.get('[class="oxd-text oxd-text--p orangehrm-attendance-card-state"]');

  // Sélecteurs basés sur les relations

  cy.get("div p");

  // Combinaison des sélecteurs

  cy.get(
    '[class="oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action"][type="button"]');

});

it("Utilisation de la fonction find", () => {
  cy.get(".orangehrm-todo-list")
    .find(".orangehrm-todo-list-item")
    .contains("Candidate to Interview");
});
it("Utilisation de la fonction parent", () => {
  cy.get(".orangehrm-todo-list-item")
    .parents()
    cy.get(".orangehrm-todo-list-item").parents();
  });
  it("Utilisation de la fonction children", () => {
    cy.get(".orangehrm-todo-list").children().should("have.length", 2);
  });
  it("Utilisation de la commande then et wrap", () => {
    cy.get(".oxd-sidepanel-body").contains("Admin").click();

    cy.contains("Search")
      .parents(".oxd-table-filter-area")
      .then((verifText) => {
        cy.wrap(verifText).contains("Username");
        cy.wrap(verifText).contains("User Role");
        cy.wrap(verifText).contains("Employee Name");
        cy.wrap(verifText).contains("Status");
      });
  });
  it.only("Utilisation de la commande invoke", () => {
    cy.get(".oxd-sidepanel-body").contains("Admin").click();

    // 1 - avec contain
    cy.get('[type="submit"]').should("contain", "Search");

    // 2 - avec then
    cy.get('[type="submit"]').then((texteBouton) => {
      expect(texteBouton.text()).to.equal(" Search ");

      // 3 - avec invoke
      cy.get('[type="submit"]')
        .invoke("text")
        .then((texte) => {
          expect(texte).to.equal(" Search ");
        });

      // 4 - invoke avec attribut
      cy.get('[type="submit"]')
        .invoke("attr", "class")
        .then((classe) => {
          expect(classe).to.contain("oxd-button");
        });

      // 5 - invoke avec propriété
      cy.get('[type="submit"]')
        .invoke("prop", "tagName")
        .then((tagName) => {
          expect(tagName.toLowerCase()).to.equal("button");
        });

      cy.get(":nth-child(2) > .oxd-input").type("text");
    });
  });
});
