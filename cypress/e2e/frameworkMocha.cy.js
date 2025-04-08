//fonction fléchée
describe("Framework Mocha", () => {
  before(() => {
    cy.log("bonjour before hook");
  });
  after(() => {
    cy.log("bonjour after hook");
  });
  beforeEach(() => {
    cy.log("bonjour beforEach hook");
  });
  afterEach(() => {
    cy.log("bonjour afterEach hook");
  });
  it.only("Mocha avec Cypress 1", () => {
    cy.log("Mon test mocha 1");
  });
  it("Mocha avec Cypress 2", () => {
    cy.log("Mon test mocha 2");
  });
  it("Mocha avec Cypress 3", () => {
    cy.log("Mon test mocha 3");
  });
});

// déclaration de fonction
describe("Framework Mocha 2", function mochaTest() {
  it("Mocha avec Cypress 4", function mochaTest1() {
    cy.log("Mon test mocha 4");
  });
  it("Mocha avec Cypress 5", function mochaTest1() {
    cy.log("Mon test mocha 5");
  });
});


