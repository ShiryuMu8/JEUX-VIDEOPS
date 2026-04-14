describe('Two Ships', () => {

  // test 1 : la page se charge
  it('Shows the game page', () => {
    cy.visit('/');
    cy.get('body').should('exist');
  });

  // test 2 : le canvas du jeu est présent
  it('Shows the game canvas', () => {
    cy.visit('/');
    cy.get('canvas#canvas').should('exist');
  });

  // test 3 : le titre du jeu est présent
  it('Shows the game title', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Two');
  });

});