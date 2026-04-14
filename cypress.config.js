import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {  // e2e = end to end, test l'app en entier
    baseUrl: 'http://localhost:3000', // url du serveur vite en local
    
    // emplacement des tests
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

  },
});