CREATE DATABASE IF NOT EXISTS db_munipampas;

USE db_munipampas;

CREATE TABLE empleado(
	id INT(11) NOT NULL AUTO_INCREMENT,
    dni INT(11) NOT NULL,
    apellidos VARCHAR(60) NOT NULL,
    nombres VARCHAR(60) NOT NULL,
    nacimiento DATE NOT NULL,
    celular INT(11) NOT NULL,
    correo VARCHAR(150) DEFAULT NULL,
    cargo VARCHAR(200) DEFAULT NULL,
    PRIMARY KEY (id)
)

DESCRIBE personal;

INSERT INTO empleado VALUES
    (1,'Crespin Diaz','Cristian Antony', '1996-11-25', 988387112, 'dcris3344@gmail.com', 'Jefe de la oficina de Tecnologia e Informatica')