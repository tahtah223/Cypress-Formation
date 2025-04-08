import mesUsers from '../../fixtures/dataUser.json';

class CommunPO {
    visitPageAcceuil() {
        cy.visit(Cypress.env("URL"));
        
        // Affichage dans la console navigateur
        console.log(mesUsers);

        // Affichage propre dans les logs Cypress
        cy.log(JSON.stringify(mesUsers, null, 2));

        // Pause pour vérifier tout
/*         cy.pause();
 */
        cy.get('[name="username"]').type(mesUsers.Admin[0]);
        cy.get('[name="password"]').type(mesUsers.Admin[1]);
        cy.get('[type="submit"]').click();
    }
}

export default CommunPO;
