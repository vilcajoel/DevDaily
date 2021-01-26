const express = require('express');                            
const ProductosHP = require('../modelos/productos.js');
const Carrito = require('../modelos/carrito')
const router = express.Router();
const baseProductos = require('../../baseProductos.json');   
const validaToken = require('../middlewares/validaToken');   

router.get('/inventarioInicial', async function(peticion,respuesta)
{
    const productos = await ProductosHP.find()

    if(productos.length != 0)
    {
        respuesta.send({resultado: "OK", msg:"baseProductos.json ya existia"})
    }
    else
    {
        for (var i=0; i<baseProductos.length; i++){
            const insertaProductos = new ProductosHP(baseProductos[i])
            await insertaProductos.save()    
        }
        respuesta.send({resultado: "OK", msg:"Se cargaron los productos correctamente"})
    }
});


router.post('/actualizaInventario', async function(peticion,respuesta)
{
    const { nombreProducto, imagenUrl, cantidadDisponible, cantidadComprada, precioUnitario } = peticion.body
    const insertaProductos = new ProductosHP({nombreProducto,imagenUrl,cantidadDisponible,cantidadComprada,precioUnitario})
    await insertaProductos.save()
    respuesta.send({resultado: "OK", msg:"Se cargaron los productos correctamente"}) 
});

router.get('/cantidadProductos',validaToken.compruebaToken ,async function(peticion,respuesta)
{
    const datos = peticion.body
    idUsuario = datos.idUsuario

    let consulta = await Carrito.findOne({idUsuario})

    if (consulta !=null){
        consulta = consulta.productos
        const resultado = consulta.length
        respuesta.status(200).send(""+resultado)
    }else{
        respuesta.status(200).send("0")
    }
});

router.get('/cargueProductos', async function(peticion,respuesta)
{
    const productos = await ProductosHP.find()
    var productosArreglo = productos.map(function(campo)
    {
        return {idProducto: campo._id, nombreProducto: campo.nombreProducto,imagenUrl: campo.imagenUrl,cantidadDisponible: campo.cantidadDisponible,precioUnitario: campo.precioUnitario}
    })
    respuesta.send(productosArreglo) 
});


router.post('/agregaCarrito', validaToken.compruebaToken, async function(peticion,respuesta)
{  
    const {idUsuario, idProducto, cantidadCarrito} = peticion.body
    
    try{        
        let carro = await Carrito.findOne({idUsuario})

        if (carro){                                                                                                   
            
            const posicionProducto =  carro.productos.findIndex(objeto => objeto.idProducto == idProducto)  

            if(posicionProducto > -1){                                              
                                                                                    
                const producto = carro.productos[posicionProducto]                  
                producto.cantidadCarrito = cantidadCarrito                          
                carro.productos[posicionProducto] = producto                        
            }
            else 
            {                                                                                    
                carro.productos.push({idProducto, cantidadCarrito})                 
            }
            carro = await carro.save()                                              
            return respuesta.status(201).send({resultado:true})
        } else {            
            const carritoNuevo = await Carrito.create({
                idUsuario: idUsuario,
                productos: [{idProducto, cantidadCarrito}]
            })
            return respuesta.status(201).send({resultado: true})
        }

    } catch (error){
        console.log("Error en carrito: ",error)
        respuesta.status(500).send("Hubo un error agregando producto al carrito")
    }
});

router.get("/muestraCarrito", validaToken.compruebaToken, async function(peticion, respuesta)
{   
    const datos = peticion.body    
    idUsuario = datos.idUsuario

    let consulta = await Carrito.findOne({idUsuario}).populate('productos.idProducto',['idProducto','nombreProducto','imagenUrl','precioUnitario']).exec()
    
    if (consulta != null){                                                                              
        consulta = consulta.productos                                                                    
    
        const carrito = consulta.map(function(elemento){                                                  
            return {     
                idProducto: elemento.idProducto["_id"],
                nombreProducto: elemento.idProducto["nombreProducto"],
                imagenUrl: elemento.idProducto["imagenUrl"],
                precioUnitario: elemento.idProducto["precioUnitario"],
                cantidadCarrito: elemento.cantidadCarrito,
                subtotal: elemento.idProducto["precioUnitario"]*elemento.cantidadCarrito
            }
        })
        respuesta.status(200).send(carrito)

    } else {
        respuesta.status(204).send(null)
    }
})

router.get("/pagar", validaToken.compruebaToken, async function(peticion,respuesta)
{
    const datos = peticion.body
    idUsuario = datos.idUsuario
    
    let consulta = await Carrito.findOne({idUsuario})   

    if (consulta == null){
        return respuesta.send({msg:"NO HAY PRODUCTOS PARA PAGAR"})     
    }
    
    consulta = consulta.productos    
    
    for (var i=0; i<consulta.length; i++){        
    
        let inventario = await ProductosHP.findOne({_id: consulta[i].idProducto})
        inventario.cantidadDisponible = inventario.cantidadDisponible - consulta[i].cantidadCarrito
    
        if (inventario.cantidadDisponible<0){
            console.log("Se va hace el envio, pero se alerta que se acabó el inventario y no va a estar disponible")
            inventario.cantidadDisponible = 0
        }
        
        await inventario.save()  
    }

    const pepe = await Carrito.findOneAndDelete({idUsuario})
    respuesta.send({msg:"OK PAGO"})

})

module.exports = router;