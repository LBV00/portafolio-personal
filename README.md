# Portafolio personal — DSY1104 Desarrollo Fullstack II

Aplicación de portafolio construida con React, Vite y Bootstrap. Incluye componentes reutilizables, datos en JSON, formulario validado, pruebas unitarias con Vitest y generación de cobertura.

## Requisitos
- Node.js LTS y npm.
- Google Chrome instalado para ejecutar Vitest con ChromeHeadless.

## Instalación
```bash
npm install
```

## Ejecutar en desarrollo
```bash
npm run dev
```
Abre la URL local que indique Vite en la terminal.

## Generar versión de producción
```bash
npm run build
npm run preview
```
El resultado se genera en `dist/`.

## Ejecutar pruebas unitarias
```bash
npm test
```
Vitest inicia ChromeHeadless, ejecuta Jasmine y muestra el resultado en la terminal. Para volver a ejecutar las pruebas al cambiar archivos:
```bash
npm run test:watch
```

## Informe de cobertura
```bash
npm run test:coverage
```
La configuración genera el informe en `coverage/` en formatos HTML y LCOV, además de un resumen en la terminal. Abre `coverage/index.html` para consultar el detalle. La cobertura real depende de los tests ejecutados; no debe darse por cumplida hasta revisar el informe generado.

## Estructura
```text
src/
  App.jsx
  main.jsx
  styles.css
  data/
    projects.json
    news.json
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    News.jsx
    NewsCard.jsx
    ProjectCard.jsx
    Projects.jsx
    SectionTitle.jsx
  __tests__/
    Contact.spec.jsx
    ProjectCard.spec.jsx

