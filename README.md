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
```

## Personalización antes de entregar
1. En `src/App.jsx`, reemplaza `Tu nombre`, el rol y la biografía por tus datos reales.
2. En `src/components/Hero.jsx`, cambia la foto de ejemplo por una fotografía tuya; conserva un texto alternativo descriptivo.
3. Edita `src/data/projects.json`: usa proyectos que realmente hayas desarrollado, imágenes propias y enlaces reales a demos o repositorios.
4. Edita `src/data/news.json` con dos noticias relevantes y fechas reales o con contenido de actualidad que puedas explicar.
5. Reemplaza los enlaces de GitHub y LinkedIn en `Hero.jsx` por tus perfiles.
6. Añade capturas de pantalla reales del sitio al README.
7. Ejecuta `npm run build` y `npm test`; guarda capturas de ambos resultados para la evidencia.

## Publicar en GitHub Pages
1. Sube el repositorio a GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. Selecciona **GitHub Actions** y configura un flujo de despliegue para Vite, o publica el contenido generado en `dist/` usando una acción de Pages.
4. Verifica la URL publicada en escritorio y móvil.

## Plan de pruebas
| ID | Componente | Caso | Resultado esperado |
|---|---|---|---|
| PC-01 | ProjectCard | Renderizar props | Título, descripción y tecnologías visibles |
| PC-02 | ProjectCard | Imagen y enlace | `alt`, URL y texto del enlace correctos |
| PC-03 | ProjectCard | Sin `linkLabel` | Se muestra “Ver proyecto” |
| CO-01 | Contact | Enviar vacío | Se muestran errores para nombre, correo y mensaje |
| CO-02 | Contact | Enviar datos válidos | Se muestra confirmación y se limpia el formulario |
| CO-03 | Contact | Accesibilidad del estado | El mensaje usa `role=status` y `aria-live=polite` |

## Mocks y límites
Las pruebas de `ProjectCard` usan un objeto fixture local como dato controlado de prueba. El portafolio no envía el formulario a un backend; la confirmación es una simulación de frontend y se informa claramente al usuario.

## Accesibilidad y rendimiento
- Etiquetas `label` asociadas a los campos y textos alternativos en las imágenes.
- Navegación con enlaces semánticos, foco visible y mensajes accesibles de validación.
- Imágenes de proyectos con carga diferida (`loading="lazy"`).
- Diseño responsive con el sistema Grid de Bootstrap y estilos para móviles.

## Git recomendado
Realiza commits después de bloques funcionales, por ejemplo:
```bash
git init
git add .
git commit -m "feat: crear estructura del portafolio React"
git add .
git commit -m "feat: añadir proyectos y noticias desde JSON"
git add .
git commit -m "test: añadir pruebas Vitest"
```


## Pruebas unitarias con Vitest

El proyecto usa Vitest integrado con Vite y el entorno `jsdom` para simular el DOM del navegador.

- Ejecutar todas las pruebas una vez: `npm test`
- Modo interactivo durante el desarrollo: `npm run test:watch`
- Generar informe de cobertura: `npm run test:coverage`
- Informe HTML de cobertura: `coverage/index.html`

Las pruebas de `src/__tests__/` comprueban la renderización de componentes, props, accesibilidad básica, validación de formularios y eventos del DOM. Ejecuta los comandos para obtener resultados reales antes de la entrega.
