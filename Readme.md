# Instrucciones

## Instalación

npm i nodemon express jsonwebtoken jest supertest bcrypt dotenv pg cors

## Archivo .env

.env

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=toor
DB_NAME=blog
DB_PORT=5432

JWT_SECRET=1234
JWT_EXPIRES_IN=90d
```

## Base de datos

El script para crear las tablas esta en el archivo script.sql

## Ejecución

```bash
  npm run dev
```

## Arquitectura de directorios

```
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── authController.js
│   │   └── postController.js
│   │   └── userController.js
│   ├── middlewares
│   │   └── isAuth.middleware.js
│   ├── models
│   │   └── post.js
│   │   └── user.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── postRoutes.js
│   │   └── userRoutes.js
│   ├── test
│   │   ├── auth.test.js
│   │   └── post.test.js
│   │   └── user.test.js
│   └── server.js
├── .env
├── .gitignore
```

- **models**: contiene las _querys_ de la base de datos
- **controllers**: contiene la lógica de la aplicación
- **routes**: contiene las rutas de la aplicación
- **config**: contiene la configuración de la base de datos
- **middlewares**: contiene los _middlewares_ de la aplicación, específicamente el isAuth que verifica si el usuario esta autenticado
- **test**: contiene los test de la aplicación (pendiente de implementación)
- **server**.js: contiene la configuración del servidor
- **.env**: contiene las variables de entorno

## Endpoints

Están todos los endpoinst de crud de _post_ y _user_, algunos vistos en la sesión son:

### Auth: Register

POST: localhost:3000/auth/register
BODY: {
"username": "test",
"password": "test"
}

### Auth: Login

POST: localhost:3000/auth/login
BODY: {
"username": "test",
"password": "test"
}

### Post: Create

HEADER: BEARER TOKEN
POST: localhost:3000/post
BODY: {
"title": "test",
"content": "test"
}

### POST: Delete

HEADER: BEARER TOKEN
DELETE: localhost:3000/post/1
