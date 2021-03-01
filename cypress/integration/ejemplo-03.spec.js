/* eslint-disable no-undef */
describe('Más ejemplos', () => {
  // Visitar una página
  it('Visitar una página', () => {
    cy.visit('https://fathomtech.io/');
  });

  // Mas comandos
  it('Comandos para búsquedas', () => {
    // Visitamos la página
    cy.visit('https://example.cypress.io/commands/querying');
    // Vemos si tiene un botón
    cy.get('button').should('contain', 'Button');
    // También por id, pero es mejor tener buenas práticas usando campos personalizados para tests
    // https://docs.cypress.io/guides/references/best-practices.html
    cy.get('#query-btn').should('contain', 'Button');
  });

  // Trabajando con formularios
  it('Trabajando con formularios', () => {
    // Visitamis la página
    cy.visit('https://example.cypress.io/commands/actions');
    // Elemento del formulario
    cy.get('.action-email')
      .type('jlgs@cifpvirgendegracia.com')
      .should('have.value', 'jlgs@cifpvirgendegracia.com');

    cy.get('#password1')
      .type('jlgs@cifpvirgendegracia.com');
  });

  it('Enviar Formulario', () => {
    // Seleciionalos el formulario y encontramos el campo
    cy.get('.action-form')
      .find('[type="text"]').type('I LOVE Cypress');
    // Lo enviamos y comprobamos
    cy.get('.action-form').submit()
      .next().should('contain', 'Your form has been submitted!');
  });
});
