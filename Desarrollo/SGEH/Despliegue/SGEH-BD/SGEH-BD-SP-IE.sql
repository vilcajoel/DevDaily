delimiter $
CREATE PROCEDURE SP_InsertarEvento (
				in codEvento varchar(30), 
				in nomEvento varchar(30), 
				in precios float,
				in TipoEvento int)

BEGIN
	INSERT INTO Evento (codigoEvento, nombreEvento, precio, TipoEvento_idTipoEvento) 
    VALUES (codEvento,nomEvento,precios,TipoEvento) ;
END $
