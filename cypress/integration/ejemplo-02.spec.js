/* eslint-disable no-undef */
// Ejemplo basado en una hostoria de usuario
// En el primer ejemplo vamos a realizar una prueba automática que acceda a un post concreto y busque que su autor es Nicolás
// y que realice una búsqueda por la cadena de texto chai - HTTP para encontrar el post que he escrito.
describe('Accedo al blog de paradigma', () => {
  it('Busco algun blog de Nicolás', () => {
    // Visitamos la web
    cy.visit('https://www.paradigmadigital.com/dev/testeo-api-rest-mocha-chai-http/');

    // Buscamos el parrafo con autor y vemos si tiene si es Nicolás
    cy.get('.medium-txt', { timeout: 2000 })
      .should('contain', 'Nicolás Cordero');
  });
});
