describe('Bouton radio et checkbox', () => {
    before(() => {
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
    });

    it('Test radio et checkbox', () => {
        cy.get('[type="radio"]')
        .first()
        .then(radio1=>{
            cy.wrap(radio1).check();
            cy.wrap(radio1).should('be.checked');
        })

        cy.get('[type="radio"]')
        .eq(1)
        .then(radio2=>{
            cy.wrap(radio2).check();
            cy.wrap(radio2).should('be.checked');
        })


/*
*   Methode d'indexation
*   1 [0],  2 [1],  3 [2]
*   eq [0],  eq [1],  eq [2]
*/
        cy.get('[type="radio"]')
        .last()
        .then(radio3=>{
            cy.wrap(radio3).check();
            cy.wrap(radio3).should('be.checked');
    });

        cy.get('[type="checkbox"]').then(checkbox=>{
            cy.wrap(checkbox).check("Bike");
            cy.wrap(checkbox).should("be.checked");

            cy.wrap(checkbox).uncheck("Bike");
            cy.wrap(checkbox).should("not.be.checked");
        })
        
        
});
});