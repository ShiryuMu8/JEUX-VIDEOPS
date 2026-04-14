describe('Space Word - Functional Tests', () => {

  // on va sur la page
  beforeEach(() => {
    cy.visit('/');
  });

  // Test 1 : Vérifier que le menu de départ est là
  it('Should show the start menu', () => {
    cy.get('nav').should('be.visible');
    cy.get('#jogar-btn').should('contain', 'PLAY');
  });

  // Test 2 : Vérifier la présence du canvas
  it('Should have the game canvas', () => {
    cy.get('canvas#canvas').should('exist');
  });

  // Test 3 : Lancer le jeu et vérifier que l'interface s'active
  it('Should start the game when clicking PLAY', () => {
    // On clique sur le bouton PLAY
    cy.get('#jogar-btn').click();

    // Le menu doit devenir invisible (style.visibility = 'hidden')
    cy.get('nav').should('not.be.visible');

    // Le mot à taper doit apparaître dans la div .text
    cy.get('.text').should('not.be.empty');
    
    // La barre de vie doit afficher les fusées 🚀
    cy.get('.lifebar').should('contain', '🚀');
  });

  // Test 4 : Vérifier que le chronomètre tourne
  it('Should update the chronometer during gameplay', () => {
    cy.get('#jogar-btn').click();
    
    // On attend 1 seconde
    cy.wait(1000);
    
    // Le chronomètre ne doit plus être à 00:00:00
    cy.get('.cronometer').should('not.contain', '00:00:00');
  });

});