// constants
const TODO_ITEM_ONE = "Aprender Vue.js";
let TODO_ITEM_TWO = "Crear Test con Cypress.io";
let TODO_ITEM_THREE = "Aplicarlo todo para aprobar DAW";

describe("Todo App Test Suite", () => {

  // Nos aseguramos que antes de cada test visitamos la web
  beforeEach(() => {
    cy.visit("/"); // "baseUrl" definido en cypress.json
  });

  describe("Añadir todos", () => {
    it("Debería permitirme añadir", () => {
      // crea una tarea
      cy.get("[data-cy=todo-input]") // vamos al input
        .type(TODO_ITEM_ONE) // le metemos el texto
        .type("{enter}"); // pulsamos enter

      // Verificamos que la hemos añadido
      cy.get("[data-cy=todo-list] li")
        .eq(0) // primero li
        .find("label")
        .should("contain", TODO_ITEM_ONE);

      // Sacamos una captura
      // cy.screenshot();

      // crea una tarea
      cy.get("[data-cy=todo-input]")
        .type(TODO_ITEM_TWO)
        .type("{enter}");

      // verificamos
      cy.get("[data-cy=todo-list] li")
        .eq(1) // segundo li
        .find("label")
        .should("contain", TODO_ITEM_TWO);

      // Sacamos una captura
      // cy.screenshot();

      // crea una tarea
      cy.get("[data-cy=todo-input]")
        .type(TODO_ITEM_THREE)
        .type("{enter}");

      // Verificamos
      cy.get("[data-cy=todo-list] li")
        .eq(2) // tercer li
        .find("label")
        .should("contain", TODO_ITEM_THREE);

      // Verificamos que hay tres
      cy.get("[data-cy=todo-count]").contains("3");

      // Sacamos una captura
      cy.screenshot();

    });
  });
  describe("Borrar todos", () => {
    it("Debería permitirme borrar", () => {
      // Añadimos dos
      // crea una tarea
      cy.get("[data-cy=todo-input]") // vamos al input
        .type(TODO_ITEM_ONE) // le metemos el texto
        .type("{enter}"); // pulsamos enter

      // Verificamos que la hemos añadido
      cy.get("[data-cy=todo-list] li")
        .eq(0) // primero li
        .find("label")
        .should("contain", TODO_ITEM_ONE);

      // Sacamos una captura
      cy.screenshot();

      // crea una tarea
      cy.get("[data-cy=todo-input]")
        .type(TODO_ITEM_TWO)
        .type("{enter}");

      // verificamos
      cy.get("[data-cy=todo-list] li")
        .eq(1) // segundo li
        .find("label")
        .should("contain", TODO_ITEM_TWO);

      // Verificamos que hay tres
      cy.get("[data-cy=todo-count]").contains("2");

      // Borramos la primera
      // la localizamos así 
      cy.get("[data-cy=todo-list] li")
        .eq(0) // segundo li
        .find("label")
        .should("contain", TODO_ITEM_ONE);
      // También así
      cy.get("[data-cy=todo-list] li")
        .contains(TODO_ITEM_ONE)
        // Nos vamos a su padre
        .parent()
        .find('.destroy')
        .click({ force: true }) // solo es visible si situamos el raton

      cy.contains(TODO_ITEM_ONE).should('not.exist')
      cy.contains(TODO_ITEM_TWO).should('exist')

      // La longitud
      cy.get("[data-cy=todo-list] li").should('have.length', 1)
      // O podemos hacerlo como
      // Verificamos que hay tres
      cy.get("[data-cy=todo-count]").contains("1");
      
      // Sacamos una captura
      cy.screenshot();
    });
  });
});