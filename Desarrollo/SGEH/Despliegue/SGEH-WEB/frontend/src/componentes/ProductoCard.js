import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductoCard extends React.Component {

    state = {
        cantidad: '1'
    }
    
    handleVerMas(props){
        props.toggleVista(props)  
    }

    handleAgregar(props){
        const producto = {idProducto: props.idProducto, nombreProducto: props.nombreProducto, cantidadCarrito: parseInt(this.state.cantidad)}
        props.agregarProducto(producto)
    }

    render() {
        const { idProducto ,nombreProducto, imagenUrl,precioUnitario } = this.props
        //const { idProducto ,nombreProducto, imagenUrl,cantidadDisponible,precioUnitario } = this.props
        return (
            <div className="producto-card animate__animated animate__fadeInUp" key={idProducto}>
                <img src={require("../assets/img/"+ imagenUrl)} alt="Producto"/>
                <div className="descripcion">
                    <h1 className="productoTitulo">{nombreProducto}</h1>
                    <p className="catalogoTexto"><strong>Precio: $ </strong>{precioUnitario.toLocaleString('en-IN')}</p>
                    {/* <p className="catalogoTexto"><strong>Unidades disponibles: </strong>{cantidadDisponible}</p> */}
                    <div className="card-opciones">
                        <button onClick={() => this.handleVerMas(this.props)} className="boton-secundario">Ver más</button>
                        <div>
                            <button onClick={() => this.handleAgregar(this.props)} className="boton-primario">Añadir</button>
                            {/* <input type="number" name="cantidadCarrito" min="1" max="10" value={this.state.cantidad} onChange={e => this.setState({cantidad: e.target.value})} className="inputFlecha"/>       */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default withRouter(ProductoCard) 