import React from 'react';
import { withRouter } from 'react-router-dom'

const VistaPrevia = (props) => {
    const { history } = props
    const { nombreProducto, imagenUrl, cantidadDisponible, precioUnitario} = props.producto
    return (
        <div className="vistaContenedor">
            <h1 className="vistaTitulo">{nombreProducto}</h1>
            <div className="vistaTarjeta">
                <div className="fotografia">
                    <img src={require("../assets/img/" + imagenUrl)} className="imgVista" alt="VistaProducto"/>
                </div>
                <div className="descripcion">
                    <h2>Precio: $ <span>{precioUnitario.toLocaleString('en-IN')}</span></h2>
                    <h3>Unidades Disponibles: <span>{cantidadDisponible}</span></h3>
                </div>
            </div>
            <button onClick={() => history.push('/main')} className="boton-primario">Atrás</button>
        </div>
    )
}
export default withRouter(VistaPrevia) 