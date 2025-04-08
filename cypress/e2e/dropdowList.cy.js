import CommunPO from "../support/pageObject/communPO";

describe('Interraction avec Liste dropdown', () => {
    it("Select element dropdown partie 1", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/openAccount"); 
        cy.get('#userSelect').select('2').should("contain","Harry Potter");
        cy.get('#currency').select('Dollar').should("have.value","Dollar");
    });

    describe("Sélecteur Css", () => {
        before(() => {
            const communPO = new CommunPO();
            communPO.visitPageAcceuil();
            cy.get('.oxd-sidepanel-body').contains("PIM").click();

        });
        /*  cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click();
         cy.get('.oxd-dropdown-menu > :nth-child(1)').click();
         cy.get('.oxd-dropdown-menu').contains('Optional Fields').click();
         cy.get('.orangehrm-main-title').should('contain.text','Optional Fields'); */
        
         it.only("Select element dropdown partie 2", () => {

            for (let index = 0; index <= 4; index++) {
                cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click();
                cy.get('.oxd-topbar-body-nav-tab-link').eq(index).then(textElement => {
                    cy.wrap(textElement).click();
                    const element = textElement.text();
/*                     cy.get('.orangehrm-main-title').should('contain', element);
 */                    cy.get('.orangehrm-main-title').then(ele=>{
                        expect(ele.text()).to.contain(element);
                    });


                });
            }
            cy.get('.oxd-button')
            .should('contain','Add')
            .and('have.css','background-color','rgb(118, 188, 33)'); //faire regarder le code en rgb sur internet et mettre des epaces apres les virgules
        });
    });

    it("Select element report dropdown list", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type("admin123");
        cy.get('[type="submit"]').click();
    
        cy.get('.oxd-sidepanel-body').contains("Leave").click();
        cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click();
        cy.get('.oxd-dropdown-menu').should('be.visible');
        cy.get('.oxd-topbar-body-nav-tab-link').then(options => {
            options.each((index, option) => {
                cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click();
                cy.get('.oxd-topbar-body-nav-tab-link').eq(index).click();
                cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text', option.textContent);
            });
        });
    });
});
