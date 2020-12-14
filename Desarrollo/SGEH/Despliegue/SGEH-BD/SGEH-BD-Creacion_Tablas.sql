CREATE DATABASE SGEH
USE SGEH

CREATE TABLE Login (
  idLogin INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (idLogin)
)

CREATE TABLE TipoEvento (
  idTipoEvento INT NOT NULL AUTO_INCREMENT,
  Nombre VARCHAR(45) NOT NULL,
  PRIMARY KEY (idTipoEvento)
)
SELECT * FROM TipoEvento

CREATE TABLE Rol (
  idRol INT NOT NULL AUTO_INCREMENT,
  nombreRol VARCHAR(45) NOT NULL,
  PRIMARY KEY (idRol)
)
  
CREATE TABLE Usuario(
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(30) NOT NULL,
  apellido_paterno VARCHAR(30) NOT NULL,
  apellido_materno VARCHAR(30) NOT NULL,
  telefono VARCHAR(9) NOT NULL,
  Rol_idRol int NOT NULL,
  Login_idLogin INT NOT NULL,
  PRIMARY KEY (idUsuario),
  CONSTRAINT fk_Usuario_Login FOREIGN KEY (Login_idLogin) REFERENCES Login (idLogin),
  CONSTRAINT fk_Usuario_Rol FOREIGN KEY (Rol_idRol) REFERENCES Rol (idRol)
)

CREATE TABLE Evento (
  idEvento INT NOT NULL AUTO_INCREMENT,
  codigoEvento varchar(30) NOT NULL,
  nombreEvento VARCHAR(30) NOT NULL,
  precio FLOAT NOT NULL,
  TipoEvento_idTipoEvento INT NOT NULL,
  PRIMARY KEY (idEvento),
  CONSTRAINT fk_Evento_TipoEvento FOREIGN KEY (TipoEvento_idTipoEvento) REFERENCES TipoEvento (idTipoEvento)
)

CREATE TABLE  DetalleEvento(
  numSillas INT NULL,
  numMesas INT NULL,
  numGlobos VARCHAR(45) NULL,
  barraLibre tinyint(1) NULL,
  presentador tinyint(1) NULL,
  horaLoca tinyint(1) NULL,
  fotografia tinyint(1) NULL,
  filmacion tinyint(1) NULL,
  buffet tinyint(1) NULL,
  DJ tinyint(1) NULL,
  numLuces INT NULL,
  idDetalleEvento INT NOT NULL AUTO_INCREMENT,
  Evento_idEvento INT NOT NULL,
  PRIMARY KEY(idDetalleEvento),
  CONSTRAINT fk_DetalleEvento_Evento FOREIGN KEY (Evento_idEvento) REFERENCES Evento(idEvento)
)

CREATE TABLE  Reserva (
  idReserva INT NOT NULL AUTO_INCREMENT,
  horaEvento VARCHAR(45) NOT NULL,
  precioTotal FLOAT NOT NULL,
  fechaEvento VARCHAR(45) NOT NULL,
  Usuario_idUsuario INT NOT NULL,
  Evento_idEvento INT NOT NULL,
  PRIMARY KEY (idReserva),
  CONSTRAINT fk_Reserva_Usuario FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario (idUsuario),
  CONSTRAINT fk_Reserva_Evento FOREIGN KEY (Evento_idEvento) REFERENCES Evento (idEvento)
)