CREATE DATABASE IF NOT EXISTS curso_angular;
USE curso_angular;

CREATE TABLE productos(
    id int(255) NOT NULL AUTO_INCREMENT,
    nombre varchar(255),
    desription varchar(255),
    precio varchar(255),
    imagen varchar(255),
    CONSTRAINT pk_productos PRIMARY KEY(id)
)ENGINE=InnoDb;
