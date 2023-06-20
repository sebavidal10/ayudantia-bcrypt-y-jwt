-- Crear la base de datos "blog"
CREATE DATABASE blog;

-- Conectar a la base de datos "blog"
\c blog

-- Crear la tabla "users"
CREATE TABLE users (
    id serial PRIMARY KEY,
    name varchar(255),
    password varchar(255),
    isAdmin boolean DEFAULT false
);

-- Crear la tabla "post"
CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(255),
    content text,
    user_id integer REFERENCES users(id)
);
