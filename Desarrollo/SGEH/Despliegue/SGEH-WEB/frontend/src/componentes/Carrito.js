import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'    
import ProductoCarrito from './ProductoCarrito';
import Tarjeta from './Tarjeta';

const Carrito = (props) => {
    const [mostrarTarjeta, setMostrarTarjeta] = useState(false)
    return(
    <div className="carritoContenedor">
        <h1 className="carritoTitulo">Carrito de compras</h1>
        <div className="compra">
            <div className="carritoProductos">      
                <ProductoCarrito productosCarrito= {props.productosCarrito} />
            </div>
            
            <div className="factura">
                <h2>Total: $ <span>{props.total.toLocaleString('en-IN')}</span></h2>
                <button onClick={() => props.history.push('/main')} className="boton-secundario">Volver</button>
                <button onClick={() => setMostrarTarjeta(true)} className="boton-terciario">Finalizar pedido</button>
            </div>
            
            { mostrarTarjeta && <Tarjeta pagar={props}/>}

        </div>
    </div>
)}
export default withRouter(Carrito) 