// https://docs.cypress.io/api/introduction/api.html

describe('Mi Primer Test', () => {
  it('Visitar la raíz de mi proyecto', () => {
    cy.visit('/');
    cy.contains('h1', 'todos');
    // Sacamos una captura
    // cy.screenshot();
  });
});
