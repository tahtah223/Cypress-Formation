# language: fr

Fonctionnalité: Gestion des utilisateurs système

        Contexte:
            Étant donné que je suis sur la page de connexion
              Et que j'ai saisi "Admin" comme nom d'utilisateur et "admin123" comme mot de passe
             Quand je clique sur le bouton de connexion
             Alors je devrais être redirigé vers le tableau de bord

        Scénario: Vérification de l'authentification
             Alors je devrais voir "Dashboard" dans l'en-tête
              Et l'élément "Dashboard" dans le menu devrait être actif

        Scénario: Vérification page Admin
             Quand j'attends 500 millisecondes
              Et que je clique sur "Admin" dans le menu
             Alors je devrais voir les éléments suivants dans le filtre du tableau
                  | Element       |
                  | System Users  |
                  | Username      |
                  | User Role     |
                  | Employee Name |
                  | Status        |
                  | Reset         |
                  | Search        |
              Et le champ de recherche devrait être visible

        Scénario: Ajout d'un utilisateur
             Quand je clique sur "Admin" dans le menu
              Et que je clique sur le bouton pour ajouter un utilisateur
              Et je remplis le formulaire avec les détails de l'utilisateur
              Et je clique sur le bouton pour enregistrer l'utilisateur
             Alors une requête POST devrait être envoyée pour ajouter l'utilisateur

        Scénario: Recherche de l'utilisateur créé
             Quand je clique sur "Admin" dans le menu
              Et que je recherche l'utilisateur "AdminCypress"
             Alors l'utilisateur "AdminCypress" devrait apparaître dans les résultats de recherche

        Scénario: Modification de l'utilisateur créé
             Quand je clique sur "Admin" dans le menu
              Et je recherche l'utilisateur "AdminCypress"
              Et je change son nom en "AdminCypress2"
             Alors une requête PUT devrait être envoyée pour modifier l'utilisateur

        Scénario: Suppression de l'utilisateur modifié
             Quand je clique sur "Admin" dans le menu
              Et je recherche et sélectionne l'utilisateur "AdminCypress2"
              Et que je clique sur le bouton de suppression
             Alors l'utilisateur "AdminCypress2" devrait être supprimé

