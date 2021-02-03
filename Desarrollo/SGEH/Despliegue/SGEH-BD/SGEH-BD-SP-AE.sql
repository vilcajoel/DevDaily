delimiter $
CREATE PROCEDURE SP_ActualizarEvento (
				in codEvento varchar(30), 
				in nomEvento varchar(30), 
				in precios float,
				in TipoEvento int)

BEGIN
	UPDATE Evento SET 
    nombreEvento=nomEvento,
    precio=precios,
    TipoEvento_idTipoEvento = TipoEvento
    WHERE codigoEvento=codEvento;
END $
