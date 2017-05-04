CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (50),
    devoured BOOLEAN DEFAULT NULL,
    date DATETIME,
    PRIMARY KEY (id)
)