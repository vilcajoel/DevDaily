delimiter $
CREATE PROCEDURE SP_EliminarEvento (
				in codEvento varchar(30)
				)
BEGIN
	DELETE FROM Evento WHERE codigoEvento=codEvento;
END $