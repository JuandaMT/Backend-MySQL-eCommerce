
# Proyecto de Backend para tienda online (e-commerce)



Este repositorio contiene el código fuente y la documentación del proyecto de backend para una tienda online (e-commerce). El objetivo principal de este proyecto es desarrollar una API REST utilizando las tecnologías Node.js, Express.js, y MySQL/Sequelize.

## Objetivos del proyecto
* Registro de usuarios utilizando el algoritmo Bcrypt para el almacenamiento seguro de contraseñas.
* Login de usuarios con generación de token de autenticación y uso de middleware para proteger las rutas.
* Implementación de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para los productos.
* Uso de al menos una relación Many-to-Many y una relación One-to-Many en el diseño de la base de datos.
* Utilización de seeders para la creación de datos iniciales en la base de datos.

## tecnologías utilizadas
El proyecto utiliza las siguientes tecnologías:

* Node.js
* Express.js
* MySQL con Sequelize como ORM (Object-Relational Mapping)



## Instalación

Sigue los siguientes pasos para ejecutar el proyecto localmente:

1. Clona este repositorio en tu máquina local.

```bash
  https://github.com/JuandaMT/Proyecto-Backend.git
```

2. Instala las dependencias del proyecto.

```bash
npm install
```

3. Configura las variables de entorno necesarias, como la conexión a la base de datos y la clave secreta para la generación de tokens JWT.

4. Ejecuta las migraciones para crear las tablas en la base de datos.

```bash
npm sequelize-cli db:migrate
```

5. Ejecuta los seeders para crear datos iniciales en la base de datos.

```bash
npm sequelize-cli db:seed:all
```

6. Inicia el servidor de desarrollo.

```bash
npm start
```

## Endpoints de la API
### Productos
* GET /products: Obtiene todos los products junto con la categoría o categorías a las que pertenecen.
* GET /products/id/:id: Obtiene un producto por su ID.
* POST /products: Crea un nuevo producto.
* PUT /products/id/:id: Actualiza un producto existente.
* DELETE /products/id/:id: Elimina un producto existente.
* GET /products/name/:name: Filtra productos por nombre.
* GET /products/price/:price: Filtra products por precio.
* GET /products/orderedbyprice: Ordena los products de mayor a menor precio.

### categorías
* GET /categories: Obtiene todas las categorías junto con los productos que tienen.
* GET /categories/id/:id: Obtiene una categoría por su ID.
* POST /categories: Crea una nueva categoría.
* PUT /categories/id/:id: Actualiza una categoría existente.
* DELETE /categories/id/:id: Elimina una categoría existente.
* GET /categories/name/:name: Filtra categorías por nombre.

### Pedidos
* GET /orders: Obtiene todos los pedidos junto con los productos que contienen.
* POST /orders/create: Crea un nuevo pedido.

### Usuarios
* POST /users: Registra un nuevo usuario utilizando el algoritmo Bcrypt para el almacenamiento seguro de la contraseña.
* POST /users/login: Permite a un usuario autenticarse utilizando Bcrypt y JWT para generar tokens de autenticación.
* GET /users: Obtiene la información del usuario autenticado junto con los pedidos y los productos que contiene cada pedido.
* POST /users/logout: Cierra la sesión del usuario autenticado.

## Authors

- [@JuandaMT](https://github.com/JuandaMT/Proyecto-Backend)

