create database Demo;

CREATE TABLE customers (
         customer_id INT AUTO_INCREMENT PRIMARY KEY,
         first_name VARCHAR(50) NOT NULL,
         last_name VARCHAR(50) NOT NULL,
         birth_date DATE,
         phone VARCHAR(20),
         address VARCHAR(255)
     );

CREATE TABLE orders (
  orderId INT PRIMARY KEY,
  subtotal DECIMAL(10, 2),
  status VARCHAR(255),
  date DATE,
  customerEmail VARCHAR(255)
);

CREATE TABLE orders (
  orderId VARCHAR(50) PRIMARY KEY,
  subtotal DECIMAL(10, 2),
  status VARCHAR(255),
  date DATE,
  customerEmail VARCHAR(255)
);

CREATE TABLE orderitem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId VARCHAR(50) NOT NULL,
    productId INT NOT NULL
);


