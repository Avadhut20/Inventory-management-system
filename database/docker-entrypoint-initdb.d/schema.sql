CREATE DATABASE  Inventory;
USE Inventory;

CREATE TABLE products (
    id INT  PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (id,name, price) VALUES (1,'Laptop', 1500.00);



SELECT * FROM products;
