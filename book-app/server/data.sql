DROP DATABASE IF EXISTS book_app;

CREATE DATABASE book_app;

\c book_app;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS booklists CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS authors CASCADE;

CREATE TABLE users 
(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE books 
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    publishDate DATE NOT NULL
);

CREATE TABLE booklists (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users,
    book_id INTEGER NOT NULL REFERENCES books
);

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    book_id INTEGER NOT NULL REFERENCES books
);