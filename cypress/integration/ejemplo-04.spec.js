/* eslint-disable no-undef */
// Historia de Usuario: Buscar en Wikipedia Jugabilidad
describe('Testing Wikipedia', () => {
  it('Buscando contenido', () => {
    cy.visit('https://www.wikipedia.org');
    cy.get("input[type='search']").type('Jugabilidad');
    cy.get("button[type='submit']").click();
    // cy.contains('Search results');
    cy.contains('Jugabilidad');
  });

  // Cuando un usuario visita la página de inicio,
  // hace clic en el selector de idioma y selecciona un nuevo
  // idioma, el usuario debe ser redirigido al dominio apropiado para el idioma seleccionado.
  it('Un usuario puede cambiar de idioma', () => {
    cy.visit('https://wikipedia.org');
    cy.contains('Read Wikipedia in your language');
    cy.get('#js-lang-list-button').click();
    cy.contains('Yorùbá').click();
    cy.url().should(
      'equal',
      'https://yo.wikipedia.org/wiki/Oj%C3%BAew%C3%A9_%C3%80k%E1%BB%8D%CC%81k%E1%BB%8D%CC%81',
    );
    cy.contains('Ẹ kú àbọ̀');
  });

  // Cuando un usuario visita la página de inicio y hace clic en el enlace a Wiktionary,
  // entonces el usuario debe ser redirigido a wiktionary.org.

  // Cuando un usuario de wiktionary.org busca una definición escribiendo en la barra de búsqueda y pulsa enter,
  // el usuario debe ser redirigido a una página con la definición de ese término de búsqueda.
  it('A user can search for a word', () => {
    cy.visit('https://wikipedia.org');
    cy.get('.other-project-link')
      .eq(2)
      .click();
    cy.url().should('equal', 'https://www.wiktionary.org/');
    cy.get('#searchInput').type('Svelte{enter}');
    cy.contains('Etymology');
    cy.contains('svelte');
  });
});
