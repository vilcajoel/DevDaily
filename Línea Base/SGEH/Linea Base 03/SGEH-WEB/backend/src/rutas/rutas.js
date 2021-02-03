const express = require('express');                            
const UsuarioHP = require('../modelos/usuario.js');
const jwt = require('jsonwebtoken');
const auto = require('../middlewares/autorizacion');
const router = express.Router();  

router.post('/nuevoUsuario', async function(peticion,respuesta)
{
     
    const { nombre, correo, contrasena1, contrasena2 } = peticion.body
    
    if (nombre.length == 0 || correo.length == 0 || contrasena1 == 0 || contrasena2 == 0){
        respuesta.send({resultado: "NO", msg:"Ningun campo del formulario puede estar vacío", nombre, correo})
    }else if (contrasena1 != contrasena2){
        respuesta.send({resultado: "NO", msg:"Contraseñas ingresadas no son iguales", nombre, correo})
    }else if (contrasena1.length < 3){
        respuesta.send({resultado: "NO", msg:"Contraseñas debe tener al menos 3 caracteres", nombre, correo})
    }else {
        const nuevoUsuario = new UsuarioHP({usuario: nombre, correo, contrasena: contrasena1})   
        const validaCorreo = await UsuarioHP.findOne({correo: correo}); 
        
        if(validaCorreo)
        {
          respuesta.send({resultado: "NO", msg: "No creado. Usuario ya existe en Database"})
        }else{             
          nuevoUsuario.contrasena = await nuevoUsuario.encriptarContrasena(contrasena1) 
          
          await nuevoUsuario.save()
          const token = jwt.sign({_id: nuevoUsuario._id}, 'secretKey123')
          
          respuesta.status(200).send({resultado: "SI", msg: "Usuario creado correctamente. Ya puede iniciar sesión", token})
        }
      }
});

router.post('/login', async function(peticion, respuesta)
{
  const {email, pass} = peticion.body
  console.log(peticion)
  console.log({email,pass})
  
  if (email == null || pass == null){
    respuesta.send({resultado: "Acceso Denegado", msg:"Por favor diligenciar los dos campos para ingresar"})
  }
  else if (email.length == 0 || pass.length == 0){
    respuesta.send({resultado: "Acceso Denegado", msg:"Por favor diligenciar los dos campos para ingresar"})
  } else 
  {
    const login =  await UsuarioHP.findOne({correo: email})
    
    if(!login)
    {
      respuesta.send({resultado: "Acceso Denegado", msg: "Correo ingresado no existe"})
    }else
    {            
      validaPass = await login.compararContrasena(pass) 
      
      if (validaPass) 
      {
        const token = jwt.sign({_id:login._id},'secretKey123')  
        respuesta.status(200).send({resultado: "Autorizado", msg: "Bienvenido(a) " + login.usuario, token})
      } else {
        respuesta.send({resultado: "Acceso Denegado", msg: "Contraseña ingresada incorrecta."})
      }
    }
  }
  
})

router.get('/datosPrivados', auto.verificaAutorizacion, function(peticion,respuesta){
    respuesta.status(200).send({resultado:"SI", msg:"Acceso Concedido", id: peticion.usuarioId})

})

module.exports = router; 