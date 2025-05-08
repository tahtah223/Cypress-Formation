# language: fr

Fonctionnalité: Ajouter des tâches

  Scénario: Ajout de tâches réussie
    Etant donné que je visite l'application
    Quand je saisis la tâche "travailler" à la liste
    Et que je clique sur la touche entrer
    Et je saisis la tâche "manger" à la liste
    Et je clique sur la touche entrer
    Et je saisis la tâche "dormir" à la liste
    Et je clique sur la touche entrer
    Alors je devrai avoir mes tâches "travailler" "manger" et "dormir" qui se sont ajoutées
    
#Marquer une tâches comme complétee
    Quand je clique sur le cercle à gauche de la tâche "travailler"
    Et que le texte de la tâche "travailler" doit être barré
    Et le cercle à gauche de la tâche "travailler" doit être coché
    Alors la tâche "travailler" doit apparaître comme complétée

#Filtrer les tâches
    Quand je clique sur le filtre "Active"
    Alors les tâches complétées ne doivent pas être visibles

    Quand je clique sur le filtre "Completed"
    Alors seules les tâches complétées doivent être visibles

    Quand je clique sur le filtre "All"
    Alors toutes les tâches doivent être visibles

# Modifier une Tâche
    Quand je double-clique sur une tâche active
    Et que je Modifie le texte de la tâche en "Bosser"
    Et que j'appuie sur Enter pour sauvegarder la modification
    Alors je vérifie que le texte de la tâche a été mis à jour en "Bosser"

# Supprimer une Tâche
Quand je survole une tâche, le bouton X doit apparaître
Et que je clique sur X pour supprimer une tâche
Alors la tâche "travailler" n'apparaît plus dans la liste

# Effacer les Tâches Complétées
Quand je marque plusieurs tâches en complétées
Et que je clique sur le bouton Clear completed
Alors mes tâches "bosser" et "manger" complétées ont été retirées de la liste
