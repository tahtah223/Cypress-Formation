import CommunPO from "../support/pageObject/communPO";
import PimPO from "../support/pageObject/pimPO";

const commun = new CommunPO();
const pimPO = new PimPO();

describe('Test tableau', () => {
    before(() => {
        commun.visitPageAcceuil();   // ✅ appel correct
        // tu peux retirer cy.login ici, car c'est déjà fait dans visitPageAcceuil si besoin
    });

    it("Modification infos utilisateur", () => {
        pimPO.accesPim(); 
        pimPO.modificationInfoUser(); 
        pimPO.saisieNom(); 
        pimPO.clickBoutonSauvegarde(); 
        pimPO.accesPim(); 
        pimPO.assertModification(); 
    });

    it.only("Suppression infos utilisateur", () => {
        pimPO.accesPim(); 
        pimPO.suppressionAvecPoubelle(); 
        pimPO.clickBoutonDelete();
        pimPO.assertSuppression();
        cy.log("Infos supprimées avec succès");
    });
    
    it("Suppression 1ère ligne", () => {
        pimPO.accesPim();
        pimPO.selectionPremiereLigneTableau();
        pimPO.clickCaseACocher();
        pimPO.assertboutonDeleteVisible(); 
        pimPO.clickboutonDeletteTableau(); 
        pimPO.clickBoutonDelete();
    });
});

