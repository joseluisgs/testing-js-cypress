# Testing JS con CYPRESS

Conjunto de ejemplos para realizar test E2E y BDD usando Cypress con JavaScript y Vue.js. 

[![Cypress](https://img.shields.io/badge/JS%20Test-Cypress-blue)](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
[![Vue Ready](https://img.shields.io/badge/Vue.js-%20Ready-%2342b983)](https://es.vuejs.org/)
[![JS Code](https://img.shields.io/badge/JS%20Code-ES2019-yellow)](https://www.ecma-international.org/ecma-262)
[![JS Style](https://img.shields.io/badge/JS%20Style-AirBnB-ff69b4)](https://airbnb.io/javascript)
[![Licence](https://img.shields.io/github/license/joseluisgs/testing-js-jest)](https://github.com/joseluisgs/testing-js-cypress/blob/main/LICENSE)
![GitHub](https://img.shields.io/github/last-commit/joseluisgs/testing-js-cypress)


- [Testing JS con CYPRESS](#testing-js-con-cypress)
  - [Acerca de](#acerca-de)
    - [Consideraciones](#consideraciones)
- [¿Por qué Cypress?](#por-qué-cypress)
  - [Otras alternativas](#otras-alternativas)
  - [Instalación](#instalación)
  - [Otras configuraciones](#otras-configuraciones)
  - [Ejecutando Cypress](#ejecutando-cypress)
  - [La carpeta Cypress](#la-carpeta-cypress)
  - [Asercciones](#asercciones)
  - [Ejecutando los Tests](#ejecutando-los-tests)
  - [Si el test falla](#si-el-test-falla)
  - [Ejemplos](#ejemplos)
- [Principales de Cypress](#principales-de-cypress)
  - [Buenas pŕaticas](#buenas-pŕaticas)
- [Autor](#autor)
  - [Licencia](#licencia)
    - [Agradecimientos](#agradecimientos)

## Acerca de
Conjunto de códigos con el objetivo de introducir la suite de test [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) y mostrar como realizar test E2E y BDD/ATDD sobre JavaScript para Node.js, HTML y un Framework como Vue.js.

### Consideraciones
No intentes ejecutar todos os test porque pueden dar error por incompatibilidades. Por favor sigue el tutorial y sus commits.

Este tutorial es la segunda parte de [Testeando JS con Jest](https://github.com/joseluisgs/testing-js-jest), donde se abordan los Test Unitarios.

# ¿Por qué Cypress?
[Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) es una de las muchas posibilidades que tenemos para testear nuestro código o proyecto en JavaScript/HTML para realizar pruebas E2E de manera automatizada con mucha potencia y nos permite muchas posibilidades para anlaizar que nuestro que interaccionamos con nuestro código resolviendo las [historias de usuario](https://www.atlassian.com/es/agile/project-management/user-stories) a realizar.

En cualquier caso, las bases de estos ejemplos te servirá para las distintas alternativas existentes.

![img](https://www.pngkit.com/png/detail/411-4116389_cypress-io-logo7639-cypress-io-logo.png)

## Otras alternativas
Existen muchas alternativas. En este tutorial me centro en Cypress, pero como he dicho hay varias ya sea para test unitarios, BDD, TDD, BDD o E2E. Te recomiendo [este artículo](https://medium.com/welldone-software/an-overview-of-javascript-testing-7ce7298b9870) para tener una visión al respecto.


## Instalación
Es importante seguir la [documentación oficial](https://jestjs.io/docs/es-ES/getting-started). 

```bash
npm install cypress --save-dev
```

## Otras configuraciones
Otras configuraciones realizadas las tienes en [Package.json](./package.json)

## Ejecutando Cypress
Debes tener un directorio llamado tests, y en ellos ficheros .spec.test.
```bash
./node_modules/.bin/cypress open
```

```bash
npm run cy:open
```

## La carpeta Cypress
- Fixtures: Datos estáticos que pueden ser utilizados para los tests.
- Integration: Lugar donde colocaremos los tests. Por defecto contiene una carpeta de tests de ejemplo.
- Plugins: Permiten acceder, modificar o ampliar el comportamiento interno de Cypress.
- Support: Lugar para colocar comportamientos reutilizables, como comandos personalizados o anulaciones globales, que estarán disponibles para todos los tests.

## Asercciones
Puedes consultarlas [aqui](https://docs.cypress.io/guides/references/assertions.html). Pero se basan principalmente en [Chai](https://docs.cypress.io/guides/references/assertions.html#Chai) y [Sinon](https://docs.cypress.io/guides/references/assertions.html#Sinon-Chai).

## Ejecutando los Tests
El comando run ejecutará todos tests que tengamos dentro de la carpeta Integration.
```bash
./node_modules/.bin/cypress run
```

```bash
npm run cy:run
```

## Si el test falla
Si nuestro test fallase, podríamos ejecutarlo en modo headed para poder depurarlo más fácilmente.
```bash
./node_modules/.bin/cypress run --headed
```

```bash
npm run cy:run --headed
```

## Ejemplos
En a carpeta Integrations/examples tienes muchos ejemplso para aprender todo de como usarlo.

# Principales de Cypress
- visit: redirige a Chrome a la url que se le pasa por parámetro.
- get: obtiene un elemento por el identificador que le pasemos, para realizar acciones sobre él. Como hemos explicado en el apartado anterior, todos los identificadores que pasemos será obtenidos del CSS.
- children: nos permite obtener un elemento que pasamos por parámetro, que desciende del elemento que hemos obtenido con la función get.
- click: realiza un click sobre el elemento que hayamos obtenido con la función get.
- type: escribe sobre el elemento obtenido un texto que pasamos por parámetro. Por ejemplo, usamos esta función para elementos input donde queremos introducir un texto.
submit: permite enviar el contenido del formulario.
- contains: para indicar el contenido del elemento.
- have.attr: para indicar que el elemento tiene un atributo en concreto.
- include: para indicar que el atributo de un elemento incluye un texto.

A todas las funciones se les puede pasar un json con el elemento timeout. Este elemento nos permite incluir un tiempo que nos ayudará a esperar a que el elemento termine de cargar en la página.

## Buenas pŕaticas
Es importante que tengamos [buenas práticas](https://docs.cypress.io/guides/references/best-practices.html) para testear sin problemas. Entre ellas el manejo de selectores óptimos para nuestros elementos de la web, como pueden ser selectores de web del tipo con selectores del tipo id como son: data-testid (mi preferido para usarlo también con JEST) o data-cy.

# Autor

Codificado con :sparkling\_heart: por [José Luis González Sánchez](https://twitter.com/joseluisgonsan)

[![Twitter](https://img.shields.io/twitter/follow/joseluisgonsan?style=social)](https://twitter.com/joseluisgonsan)
[![GitHub](https://img.shields.io/github/followers/joseluisgs?style=social)](https://github.com/joseluisgs)

## Licencia

Este proyecto esta licenciado bajo licencia **MIT**, si desea saber más, visite el fichero
[LICENSE](./LICENSE) para su uso docente y educativo.

### Agradecimientos
Proyectos basados en este [excelente tutorial](https://www.paradigmadigital.com/dev/cypress-un-framework-de-pruebas-todo-en-uno/). Muchas gracias