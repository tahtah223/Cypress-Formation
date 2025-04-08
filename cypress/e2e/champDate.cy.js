import moment from "moment";
function dateDuJour(){
  const maDateDuJour = moment().format("YYYY-MM-DD");
    
    return maDateDuJour
}
function dateDuJourPlusDeux(){
  const maDateDuJourPlusDeux = moment().add(2, "days").format("YYYY-MM-DD");

    return maDateDuJourPlusDeux
}
describe("Sélecteur Css", () => {
  before(() => {
    cy.visitApplication();
        cy.login("Admin", "admin123");
    });

  it("Test date picker", () => {
    const dateActuelle = dateDuJour()
    const dateActuellePlusDeux = dateDuJourPlusDeux()

    cy.log("La date du jour est ",dateActuelle);
    cy.log("La date du jour plus deux ",dateActuellePlusDeux);

    cy.get(".oxd-sidepanel-body").contains("My Info").click();

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .then(datePicker=>{
        cy.wrap(datePicker)
        .clear({force:true})
        .type(dateActuellePlusDeux);
        cy.wrap(datePicker)
        .should("have.value",dateActuellePlusDeux,{force:true});
        cy.screenshot("date picker");

  });
    
  });
});
