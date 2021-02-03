import React from 'react';
import ProductoCard from './ProductoCard'

class CatalogoProductos extends React.Component {

    URL = 'http://localhost:4000'

    constructor(props){
        super(props)
        this.state = {
            datos: [],
            buscar: '',
            productosFiltro: [],
            cantidad: '1'
        }
    }

    async componentDidMount(){
        await this.cargueProductos()
        this.filtroProductos()
    }

    cargueProductos = async () => {
        const respuesta = await fetch(this.URL + '/catalogo/cargueProductos')
        const datos = await respuesta.json()
        this.setState({datos})
    }

    handleBuscar = async (e) => {
        await this.setState({ buscar: e.target.value })
        this.filtroProductos()
    }

    filtroProductos = () => {
        const productosFiltro = this.state.datos.filter(producto => producto.nombreProducto.toLowerCase().indexOf(this.state.buscar.toLowerCase()) > -1) 
        this.setState({ productosFiltro })
    }

    render() {
        return (
            
            <div >
                <div className="buscador">
                    <div>
                        <h1>Listado de eventos</h1>
                    </div>
                    <div>
                        <p>¿Qué estás buscando?</p>  
                        <input type="text" name="buscar" onChange={this.handleBuscar} className="catalogoInput" placeholder="Introduzca evento..."/>
                    </div>
                </div>
                <div className="catalogoContenedor">

                    {
                        this.state.productosFiltro.map((producto) => {
                            return(
                                <ProductoCard
                                    key = {producto.idProducto}
                                    idProducto = {producto.idProducto}
                                    nombreProducto = {producto.nombreProducto}
                                    imagenUrl = {producto.imagenUrl}
                                    cantidadDisponible = {producto.cantidadDisponible}
                                    precioUnitario = {producto.precioUnitario}
                                    toggleVista = {this.props.toggleVista}
                                    agregarProducto = {this.props.agregarProducto}
                                    history = {this.props.history}
                                />
                            )
                        })
                    }

                </div>
            </div>
        )
        
    }
}


export default CatalogoProductos