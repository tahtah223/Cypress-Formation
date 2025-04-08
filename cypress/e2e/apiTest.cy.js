/// <reference types="cypress" />

describe("Test API avec Cypress", () => {
  it("API Test GET", () => {
    cy.request("GET", "http://localhost:3000/user").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(2);
    });
  });

  it("API Test POST", () => {
    cy.request("POST", "http://localhost:3000/user", {
      id: 3,
      nom: "Charlie",
      prenom: "Gaetan",
    }).should((response) => {
      expect(response.body.id).to.eq(3);
      expect(response.body.nom).to.eq("Charlie");
      expect(response.body.prenom).to.eq("Gaetan");
    });
  });
  it("API Test PUT", () => {
    cy.request("PUT", "http://localhost:3000/user/3", {
      id: 3,
      nom: "Florini",
      prenom: "Gaetan",
    }).should((response) => {
      expect(response.body.id).to.eq(3);
      expect(response.body.nom).to.eq("Florini");
      expect(response.body.prenom).to.eq("Gaetan");
    });
  });
  it("API Test PUT", () => {
    cy.request("PUT", "http://localhost:3000/user/3", {
      id: 3,
      nom: "Florini",
      prenom: "Gaetan",
    }).should((response) => {
      expect(response.body.id).to.eq(3);
      expect(response.body.nom).to.eq("Florini");
      expect(response.body.prenom).to.eq("Gaetan");
    });
  });
  it("API Test DELETE", () => {
    cy.request("DELETE", "http://localhost:3000/user/3").should(response=> {
      expect(response.status).to.eq(200);
    });

    cy.request("GET", "http://localhost:3000/user").should(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(2);
    });
  });
  it.only("Mock API", () => {
    cy.intercept('GET', 
     'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC',
     {
        body: [
            {
                "id": 71,
                "userName": "TDIALLO",
                "deleted": false,
                "status": false,
                "employee": {
                    "empNumber": 95,
                    "employeeId": "0039",
                    "firstName": "Tahtah",
                    "middleName": "",
                    "lastName": "DIALLO",
                    "terminationId": null
                },
                "userRole": {
                    "id": 2,
                    "name": "ESS",
                    "displayName": "ESS"
                }
            }]
    
    }).as("utilisateurs");

    cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
        );
      cy.get('[name="username"]').type("Admin");
      cy.get('[name="password"]').type("admin123");
      cy.get('[type="submit"]').click();
      
      cy.wait('@utilisateurs').then(interception => {
        expect(interception.response.statusCode).to.eq(200),
        expect(interception.response.body[0].userName).to.eq('TDIALLO'),
        expect(interception.response.body[0].employee.firstName).to.eq('Tahtah')


      })
});
});

