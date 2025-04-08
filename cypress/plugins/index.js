module.exports = (on, config) => {
  // Exemple pour exposer les variables d'environnement à Cypress
  on('before:browser:launch', (browser = {}, launchOptions) => {
    // On peut ajouter des variables d'environnement à l'interface du test ici
    launchOptions.env = {
      ...process.env,  // Ajoute les variables d'environnement du système
    }
    return launchOptions;
  });
};
