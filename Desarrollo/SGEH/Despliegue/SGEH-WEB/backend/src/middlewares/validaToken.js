const jwt = require('jsonwebtoken');

function compruebaToken(peticion,respuesta,next)
{
    const bearerHeader = peticion.headers['autorizacion']   
    if (bearerHeader){                                                                      
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        jwt.verify(bearerToken, 'secretKey123',(error,data) => {
            if(error){
                return respuesta.json({resultado: "El token es falso! "})
            } else {
                peticion.body.idUsuario = data._id 
                next()
            }
        })
    } else {
        respuesta.status(403).send({resultado: 'No existe token'})   
    }
        
}

module.exports = {compruebaToken};