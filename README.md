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
- [Autor](#autor)
  - [Licencia](#licencia)
    - [Agradecimientos](#agradecimientos)

## Acerca de
Conjunto de códigos con el objetivo de introducir la suite de test [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) y mostrar como realizar test E2E y BDD/ATDD sobre JavaScript para Node.js, HTML y un Framework como Vue.js.

### Consideraciones
No intentes ejecutar todos os test porque pueden dar error por incompatibilidades. Por favor sigue el tutorial y sus commits.

Este tutorial es la segunda parte de [Testeando JS con Jest](https://github.com/joseluisgs/testing-js-jest), donde se abordan los Test Unitarios.

# ¿Por qué Cypress?
[Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) es una de las muchas posibilidades que tenemos para testear nuestro código o proyecto en JavaScript/HTML para realizar pruebas E2E de manera automatizada con mucha potencia y nos permite muchas posibilidades para anlaizar que nuestro que interaccionamos con nuestro código resolviendo las historias de usuario a realizar.

En cualquier caso, las bases de estos ejemplos te servirá para las distintas alternativas existentes.

![img](https://www.pngkit.com/png/detail/411-4116389_cypress-io-logo7639-cypress-io-logo.png)

## Otras alternativas
Existen muchas alternativas. En este tutorial me centro en Cypress, pero como he dicho hay varias ya sea para test unitarios, BDD, TDD, BDD o E2E. Te recomiendo [este artículo](https://medium.com/welldone-software/an-overview-of-javascript-testing-7ce7298b9870) para tener una visión al respecto.


# Instalación
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
Puedes consultarlas [aqui](https://docs.cypress.io/guides/references/assertions.html).

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

# Autor

Codificado con :sparkling\_heart: por [José Luis González Sánchez](https://twitter.com/joseluisgonsan)

[![Twitter](https://img.shields.io/twitter/follow/joseluisgonsan?style=social)](https://twitter.com/joseluisgonsan)
[![GitHub](https://img.shields.io/github/followers/joseluisgs?style=social)](https://github.com/joseluisgs)

## Licencia

Este proyecto esta licenciado bajo licencia **MIT**, si desea saber más, visite el fichero
[LICENSE](./LICENSE) para su uso docente y educativo.

### Agradecimientos
Proyectos basados en este [excelente tutorial](https://www.paradigmadigital.com/dev/cypress-un-framework-de-pruebas-todo-en-uno/). Muchas gracias