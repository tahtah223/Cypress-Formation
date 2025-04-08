# language: fr

Fonctionnalité: fonctionnalité de connexion

  Scénario: Connexion réussie
    Etant donné que je visite la page de Connexion
    Quand je saisis des identifiants valides
    Et que je clique sur le bouton login
    Alors je devrai être redirigé vers le tableau de bord

Scénario: Connexion en echec
    Etant donné que je visite la page de Connexion
    Quand je saisis des identifiants invalides
    Et que je clique sur le bouton login
    Alors je devrai voir le message d'erreur "Invalid credentials"