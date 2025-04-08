describe('Exercice dropdown List', () => {
    
    it("Exercice dropdown List 1",()=>{
        cy.visit(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
            );
          cy.get('[name="username"]').type("Admin");
          cy.get('[name="password"]').type("admin123");
          cy.get('[type="submit"]').click();
      
          cy.get('.oxd-sidepanel-body').contains("Leave").click();
        
            for (let index = 0; index <= 1; index++) {
                cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click();
                
                cy.get('.oxd-topbar-body-nav-tab-link').eq(index).then(textElement=>{
                    cy.wrap(textElement).click();

                    const element = textElement.text();
                    
                    cy.get('.oxd-table-filter-title').should('contain',element);
                })
            }

    })



});