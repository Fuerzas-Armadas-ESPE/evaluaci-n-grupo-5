# Curso y Gestión de Temas #Course RJ"

Este proyecto ofrece una solución completa para la gestión de cursos y temas, permitiendo a los usuarios crear, leer, actualizar y eliminar cursos y sus respectivos temas. El backend está desarrollado con Express, mientras que para el frontend se utiliza Vite junto con React.

## Configuración del Proyecto

### Backend

- **Tecnología**: Utilizamos Express para el manejo del servidor y las rutas.
- **Base de Datos**: MongoDB está configurado para almacenar la información de los cursos y temas.

### Frontend (Opcional)

- Desarrollado con React, utilizando Vite como herramienta de construcción.

## Desarrollo del Backend

1. **Gestión de Cursos**: Implementamos un módulo CRUD para manejar los cursos.
2. **Gestión de Temas**: Similarmente, un módulo CRUD para los temas de los cursos es desarrollado, permitiendo una gestión eficaz de estos.

## Relación entre Cursos y Temas

Establecemos una relación donde un curso puede tener múltiples temas asociados, lo que permite una organización y gestión detallada de los contenidos del curso.

## Desarrollo del Frontend

- **Tecnologías**: React es usado para el desarrollo del frontend, ofreciendo una experiencia de usuario interactiva y dinámica.
- **Integración con Backend**: Mediante peticiones HTTP, el frontend interactúa con los endpoints RESTful del backend.

## Implementación de Seguridad

- **Backend**: Implementamos seguridad en las rutas y acciones, utilizando JWT para la autenticación y control de acceso.

## Pruebas Unitarias

- **Jest**: Utilizamos Jest para escribir pruebas unitarias, asegurando el correcto funcionamiento de nuestros controladores y servicios.

## Entregables

- **Repositorio GitHub**: Encuentra el código fuente en nuestro repositorio de GitHub.
- **Documentación**: Incluimos documentación detallada para la configuración y ejecución del proyecto.
- **Demostración**: Proporcionamos capturas de pantalla o vídeos demostrativos del sistema en funcionamiento.

## Herramientas para Pruebas de API

Para probar el backend, usamos la herramienta de Thunder Client, este facilitó realizar solicitudes HTTP para visualizar los datos y probar el sistema en tiempo real, tales como GET,POST,PUT y DELETE.


## Estructura del Proyecto
V EXAMEN3P_WEB-MAIN
├── client
│ ├── public
│ └── src
│ ├── api
│ ├── assets
│ ├── components
│ │ ├── tasks
│ │ │ ├── TaskCardWithTopics.jsx
│ │ │ └── TaskCardWithoutTopics.jsx
│ │ └── ui
│ │ └── Navbar.jsx
│ ├── context
│ ├── pages
│ │ ├── CourseAccessPage.jsx
│ │ ├── HomePage.jsx
│ │ ├── LoginPage.jsx
│ │ ├── RegisterPage.jsx
│ │ ├── TaskFormPage.jsx
│ │ └── TasksPage.jsx
│ ├── schemas
│ ├── App.css
│ ├── App.jsx
│ ├── App.test.js
│ ├── config.js
│ ├── index.css
│ ├── main.jsx
│ ├── reportWebVitals.js
│ ├── routes.jsx
│ └── setupTests.js
└── .gitignore


### Descripción de los Componentes Principales

- `client/`: Contiene todos los archivos relacionados con la interfaz de usuario del proyecto.
  - `public/`: Almacena archivos estáticos como el `index.html`.
  - `src/`: Directorio principal que contiene el código fuente JavaScript y CSS.
    - `api/`: Funciones para realizar peticiones a APIs externas.
    - `assets/`: Imágenes, fuentes y otros recursos estáticos utilizados en la aplicación.
    - `components/`: Componentes reutilizables de React.
      - `tasks/`: Componentes específicos para la funcionalidad de tareas.
      - `ui/`: Componentes de interfaz de usuario como la barra de navegación.
    - `context/`: Contextos de React para el manejo global del estado.
    - `pages/`: Componentes de React que actúan como páginas o vistas en la aplicación.
    - `schemas/`: Esquemas para la validación de datos o estructuras de datos esperadas.
    - `App.css`: Hoja de estilos global de la aplicación.
    - `App.jsx`: Componente principal de la aplicación.
    - `config.js`: Archivo de configuración global de la aplicación.
    - `index.css`: Hoja de estilos base para el proyecto.
    - `main.jsx`: Punto de entrada principal de la aplicación React.
    - `routes.jsx`: Definiciones de rutas de la aplicación usando React Router.
- `.gitignore`: Archivo para especificar intencionalmente archivos no rastreados para ignorar.


## Configuración y Ejecución

### Para ejecutar todo el proyecto 

1. En la raíz del proyecto:

```bash
npm install
docker compose up -d
npm run dev
```

2. En la carpeta client
```bash
cd client
npm install
npm run dev
```
## Elaborado por:
Ricardo Rivadeneira, Jose Imbaquinga
