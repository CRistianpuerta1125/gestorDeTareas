Instrucciones para ejecutar el proyecto
Este proyecto está compuesto por dos partes: el backend (desarrollado en Laravel) y el frontend (desarrollado en React). A continuación se detallan los pasos necesarios para poner en marcha ambos componentes.

Backend (Laravel)
Instalar dependencias: Primero, asegúrate de tener todas las dependencias necesarias para el backend. Si aún no lo has hecho, ejecuta el siguiente comando para instalar las dependencias de Laravel:

bash
Copiar código
composer install
Configurar el archivo .env:

En el archivo .env.example, se encuentra configurada la base de datos como DB_DATABASE=api. Si por alguna razón la base de datos tiene un nombre diferente, modifica este valor en el archivo .env y asigna el nombre correcto de la base de datos.
Importante no olvidar el composer install para todas las dependencias

Si no tienes un archivo .env, puedes copiarlo desde .env.example:
cp .env.example .env

Generar la clave de la aplicación: Laravel requiere una clave única para cada aplicación. Ejecuta este comando para generar la clave:
php artisan key:generate

Migrar la base de datos: Para crear las tablas en la base de datos, ejecuta las migraciones con:
php artisan migrate

Ejecutar el servidor: Para iniciar el servidor de desarrollo de Laravel, utiliza el siguiente comando:
php artisan serve

Esto iniciará el backend en http://127.0.0.1:8000 o en la URL que Laravel te indique.

Frontend (React)
Instalar dependencias: Antes de iniciar el frontend, asegúrate de tener instaladas todas las dependencias necesarias. En el directorio del frontend (donde se encuentra el archivo package.json), ejecuta:

bash
Copiar código
npm install
Ejecutar el servidor de desarrollo: Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

bash
Copiar código
npm start
Esto debería abrir automáticamente tu navegador en http://localhost:3000, donde podrás ver la interfaz de usuario de tu aplicación.
Aca dejare algunos registros para rellenar:
INSERT INTO `products` (`id`, `tittle`, `description`, `state`, `created_at`, `updated_at`) 
VALUES 
(NULL, 'programacion HTTP', 'Programación básica en HTTP', 'pendiente', NULL, NULL),
(NULL, 'base de datos MySQL', 'Conceptos fundamentales de MySQL', 'pendiente', NULL, NULL),
(NULL, 'Frameworks en PHP', 'Introducción a los frameworks PHP como Laravel', 'pendiente', NULL, NULL),
(NULL, 'React JS', 'Fundamentos de React JS y creación de componentes', 'pendiente', NULL, NULL),
(NULL, 'Desarrollo móvil con Flutter', 'Introducción al desarrollo móvil con Flutter', 'pendiente', NULL, NULL),
(NULL, 'Estrategias de SEO', 'Técnicas básicas de optimización para motores de búsqueda', 'pendiente', NULL, NULL),
(NULL, 'Node.js para backend', 'Desarrollo backend con Node.js', 'pendiente', NULL, NULL),
(NULL, 'JavaScript Avanzado', 'Conceptos avanzados en JavaScript', 'pendiente', NULL, NULL),
(NULL, 'Desarrollo web con Laravel', 'Fundamentos de Laravel para crear aplicaciones web', 'pendiente', NULL, NULL),
(NULL, 'Python para ciencia de datos', 'Uso de Python en ciencia de datos y análisis de datos', 'pendiente', NULL, NULL);
