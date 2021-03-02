// Constantes para test
const TODO_ITEM_ONE = 'Aprender Vue.js';
const TODO_ITEM_TWO = 'Crear Test con Cypress.io';
const TODO_ITEM_THREE = 'Aplicarlo todo para aprobar DAW';
const TODO_ITEM_EDIT = ' Lo he Editado';

/* Historia de Usuario: Queremos un gestor de tareas que nos permita añadir tareas,
modicarlas y borrarlas y cambiar su estado a completadas o editar su nombre */

describe('Todo App Test Suite', () => {
  // Nos aseguramos que antes de cada test visitamos la web
  beforeEach(() => {
    cy.visit('/'); // "baseUrl" definido en cypress.json
  });

  // Como usuario quiero poder añadir tareas y comprobar que están activas
  describe('Añadir Tareas', () => {
    // Test de añadir tres tareas y comprobamos que la lista de items son tres y que realmente son esas tareas
    it('Debería permitirme añadir', () => {
      // crea una tarea
      cy.get('[data-cy=todo-input]') // vamos al input
        .type(TODO_ITEM_ONE) // le metemos el texto
        .type('{enter}'); // pulsamos enter

      // Verificamos que la hemos añadido
      cy.get('[data-cy=todo-list] li')
        .eq(0) // primero li
        .find('label')
        .should('contain', TODO_ITEM_ONE);

      // Sacamos una captura
      // cy.screenshot();

      // crea una tarea
      cy.get('[data-cy=todo-input]')
        .type(TODO_ITEM_TWO)
        .type('{enter}');

      // verificamos
      cy.get('[data-cy=todo-list] li')
        .eq(1) // segundo li
        .find('label')
        .should('contain', TODO_ITEM_TWO);

      // Sacamos una captura
      // cy.screenshot();

      // crea una tarea
      cy.get('[data-cy=todo-input]')
        .type(TODO_ITEM_THREE)
        .type('{enter}');

      // Verificamos
      cy.get('[data-cy=todo-list] li')
        .eq(2) // tercer li
        .find('label')
        .should('contain', TODO_ITEM_THREE);

      // Verificamos que hay tres
      cy.get('[data-cy=todo-count]').contains('3');

      // Sacamos una captura
      // cy.screenshot();
    });
  });

  // Como usuario quiero poder borrar tareas
  describe('Borrar Tareas', () => {
    // Insertamos dos tareas y borramos la primera, el contador de tareas activas debe actualizarse
    it('Debería permitirme borrar', () => {
      // Añadimos dos
      // crea una tarea
      cy.get('[data-cy=todo-input]') // vamos al input
        .type(TODO_ITEM_ONE) // le metemos el texto
        .type('{enter}'); // pulsamos enter

      // Verificamos que la hemos añadido
      cy.get('[data-cy=todo-list] li')
        .eq(0) // primero li
        .find('label')
        .should('contain', TODO_ITEM_ONE);

      // Sacamos una captura
      // cy.screenshot();

      // crea una tarea
      cy.get('[data-cy=todo-input]')
        .type(TODO_ITEM_TWO)
        .type('{enter}');

      // verificamos
      cy.get('[data-cy=todo-list] li')
        .eq(1) // segundo li
        .find('label')
        .should('contain', TODO_ITEM_TWO);

      // Verificamos que hay dos
      cy.get('[data-cy=todo-count]').contains('2');

      // Borramos la primera
      // la localizamos así
      cy.get('[data-cy=todo-list] li')
        .eq(0) // segundo li
        .find('label')
        .should('contain', TODO_ITEM_ONE);
      // También así
      cy.get('[data-cy=todo-list] li')
        .contains(TODO_ITEM_ONE)
        // Nos vamos a su padre
        .parent()
        .find('.destroy')
        .click({ force: true }); // solo es visible si situamos el ratón

      cy.contains(TODO_ITEM_ONE).should('not.exist');
      cy.contains(TODO_ITEM_TWO).should('exist');

      // La longitud
      cy.get('[data-cy=todo-list] li').should('have.length', 1);
      // O podemos hacerlo como
      // Verificamos que hay tres
      cy.get('[data-cy=todo-count]').contains('1');

      // Sacamos una captura
      // cy.screenshot();
    });
  });


  // Como usuario quiero poder editar tareas
  describe('Editar Tareas', () => {
    it('Debería permitirme Editar Nombre de Tarea', () => {
      // Añadimos dos
      // crea una tarea
      cy.get('[data-cy=todo-input]') // vamos al input
        .type(TODO_ITEM_ONE) // le metemos el texto
        .type('{enter}'); // pulsamos enter

      // Verificamos que la hemos añadido
      cy.get('[data-cy=todo-list] li')
        .eq(0) // primero li
        .find('label')
        .should('contain', TODO_ITEM_ONE);

      // Sacamos una captura
      // cy.screenshot();

      // crea una tarea
      cy.get('[data-cy=todo-input]')
        .type(TODO_ITEM_TWO)
        .type('{enter}');

      // verificamos
      cy.get('[data-cy=todo-list] li')
        .eq(1) // segundo li
        .find('label')
        .should('contain', TODO_ITEM_TWO);

      // Verificamos que hay dos
      cy.get('[data-cy=todo-count]').contains('2');

      // Editamos la primera
      // También así
      cy.get('[data-cy=todo-list] li')
        .contains(TODO_ITEM_ONE)
        // Doble clic
        .dblclick({ force: true })
      // Metemos el texto
      // Cogemos el item
      cy.get('[data-cy=todo-item]').eq(0)
        .type(TODO_ITEM_EDIT, { force: true }) // le metemos el texto
        .type('{enter}', { force: true }); // pulsamos enter

      // Por Lo conseguimos
      cy.get('[data-cy=todo-list] li')
        .eq(0) // primero li
        .find('label')
        .should('contain', TODO_ITEM_EDIT);

      // La longitud
      cy.get('[data-cy=todo-list] li').should('have.length', 2);
      // O podemos hacerlo como
      // Verificamos que hay tres
      cy.get('[data-cy=todo-count]').contains('2');

      // Sacamos una captura
      // cy.screenshot();
    });


    // Debería permitirme cambiar el estado
    it('Debería permitirme Cambiar Estado de Tarea', () => {
      // Añadimos dos
      // crea una tarea
      cy.get('[data-cy=todo-input]') // vamos al input
        .type(TODO_ITEM_ONE) // le metemos el texto
        .type('{enter}'); // pulsamos enter

      // Verificamos que la hemos añadido
      cy.get('[data-cy=todo-list] li')
        .eq(0) // primero li
        .find('label')
        .should('contain', TODO_ITEM_ONE);

      // Sacamos una captura
      // cy.screenshot();

      // crea una tarea
      cy.get('[data-cy=todo-input]')
        .type(TODO_ITEM_TWO)
        .type('{enter}');

      // verificamos
      cy.get('[data-cy=todo-list] li')
        .eq(1) // segundo li
        .find('label')
        .should('contain', TODO_ITEM_TWO);

      // Verificamos que hay dos
      cy.get('[data-cy=todo-count]').contains('2');

      // Editamos la primera con doble clik
      cy.get('[data-cy=todo-list] li')
        .eq(0)
        // buscamos su campo de check y pulsamos click
        .find('[type="checkbox"]')
        .click();
      // 

      // comprobamos
      // La clase de esa tarea
      cy.get('[data-cy=todo-list] li')
        .eq(0)
        .should('have.class', 'todo completed');

      // La longitud
      cy.get('[data-cy=todo-list] li').should('have.length', 2);
      // O podemos hacerlo como
      // Verificamos que hay dos pendientes
      cy.get('[data-cy=todo-count]').contains('1');

      // Sacamos una captura
      // cy.screenshot();

      // Volvemos a marcarla
      cy.get('[data-cy=todo-list] li')
        .eq(0)
        // buscamos su campo de check y pulsamos click
        .find('[type="checkbox"]')
        .click();

      // La clase de esa tarea
      cy.get('[data-cy=todo-list] li')
        .eq(0)
        .should('have.class', 'todo');

      // La longitud
      cy.get('[data-cy=todo-list] li').should('have.length', 2);
      // O podemos hacerlo como
      // Verificamos que hay dos pendientes
      cy.get('[data-cy=todo-count]').contains('2');

      // Sacamos una captura
      // cy.screenshot();

    });

    // Debería permitirme eliminar tareas completadas
    it('Debería permitirme eliminar tareas completadas', () => {
      // Añadimos dos
      // crea una tarea
      cy.get('[data-cy=todo-input]') // vamos al input
        .type(TODO_ITEM_ONE) // le metemos el texto
        .type('{enter}'); // pulsamos enter

      // Verificamos que la hemos añadido
      cy.get('[data-cy=todo-list] li')
        .eq(0) // primero li
        .find('label')
        .should('contain', TODO_ITEM_ONE);

      // Sacamos una captura
      // cy.screenshot();

      // crea una tarea
      cy.get('[data-cy=todo-input]')
        .type(TODO_ITEM_TWO)
        .type('{enter}');

      // verificamos
      cy.get('[data-cy=todo-list] li')
        .eq(1) // segundo li
        .find('label')
        .should('contain', TODO_ITEM_TWO);

      // Verificamos que hay dos
      cy.get('[data-cy=todo-count]').contains('2');

      // Editamos la primera con doble clik
      cy.get('[data-cy=todo-list] li')
        .eq(0)
        // buscamos su campo de check y pulsamos click
        .find('[type="checkbox"]')
        .click();
      // 

      // comprobamos
      // La clase de esa tarea
      cy.get('[data-cy=todo-list] li')
        .eq(0)
        .should('have.class', 'todo completed');

      // La longitud
      cy.get('[data-cy=todo-list] li').should('have.length', 2);
      // O podemos hacerlo como
      // Verificamos que hay dos pendientes
      cy.get('[data-cy=todo-count]').contains('1');

      // Sacamos una captura
      // cy.screenshot();

      // Recuperamos en enlace y lo marcamos
      cy.get('[data-cy=todo-clear-completed]')
        .click();

      // La longitud
      cy.get('[data-cy=todo-list] li').should('have.length', 1);
      // O podemos hacerlo como
      // Verificamos que hay dos pendientes
      cy.get('[data-cy=todo-count]').contains('1');

      // verificamos
      cy.get('[data-cy=todo-list] li')
        .eq(0) // segundo li
        .find('label')
        .should('contain', TODO_ITEM_TWO);

      // Sacamos una captura
      // cy.screenshot();

    });
  });
});
