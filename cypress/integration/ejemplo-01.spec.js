describe('Mi primer test', () => {
  it('Vamos a jugar un poco', () => {
    // Abrimos la web
    cy.visit('https://example.cypress.io');
    // Buscamos si contiene un elemento Type
    cy.contains('type').click();

    // Vemos si hay una ur con esto '/commands/actions'
    cy.url().should('include', '/commands/actions');

    // Buscamos el campo de un email y le introducimos un valor y chequeamos
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});
