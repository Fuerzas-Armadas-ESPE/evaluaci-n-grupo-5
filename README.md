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