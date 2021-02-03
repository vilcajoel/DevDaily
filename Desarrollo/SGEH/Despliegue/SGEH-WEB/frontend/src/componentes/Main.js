import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Encabezado from './Encabezado';
import CatalogoProductos from './CatalogoProductos';
import VistaPrevia from './VistaPrevia';
import Carrito from './Carrito';
import { Footer } from './Footer';
import Swal from 'sweetalert2';

class Main extends React.Component {
	URL = 'http://localhost:4000';

	state = {
		token: '',
		autenticado: false,
		producto: {},
		productosCarrito: [],
		carrito: 0,
		total: 0,
	};

	async componentDidMount() {
		await this.obtenerToken();

		if (this.state.token === 'Bearer null') {
			// alert('Por favor autenticarse primero...');
			Swal.fire(
				'Cuidado!',
				'Por favor autenticarse primero...',
				'info'
			  )
			return this.props.history.push('/login');
		} else {
			//console.log(this.state.token);
			this.setState({ autenticado: true });
			await this.cantidadProductos();
			this.muestraCarrito();
		}
	}

	objetoPeticion = (metodo, datos) => {
		return {
			method: metodo,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				autorizacion: this.state.token,
				Origin: '',
				Host: '',
			},
			body: JSON.stringify(datos),
		};
	};

	obtenerToken = async () => {
		await this.setState({ token: `Bearer ${localStorage.getItem('token')}` });
	};

	cantidadProductos = async () => {
		try {
			const respuesta = await fetch(`${this.URL}/catalogo/cantidadProductos`, this.objetoPeticion('GET'));
			let carrito = await respuesta.json();
			this.setState({ carrito });
		} catch (error) {
			//console.log('Algo falló en cantidadProductos: ', error);
		}
	};

	muestraCarrito = async () => {
		const respuesta = await fetch(`${this.URL}/catalogo/muestraCarrito`, this.objetoPeticion('GET'));

		if (respuesta.status === 200) {
			let subtotales = 0;
			let productosCarrito = await respuesta.json();
			this.setState({ productosCarrito });

			for (let i = 0; i < productosCarrito.length; i++) {
				subtotales += productosCarrito[i]['subtotal'];
			}
			this.setState({ total: subtotales });
		}
	};

	agregaProductoCarrito = async (props) => {
		//console.log(props);
		const respuesta = await fetch(`${this.URL}/catalogo/agregaCarrito`, this.objetoPeticion('POST', props));

		if (respuesta) {
			// alert('Se agregó ' + props.cantidadCarrito + ' ' + props.nombreProducto + '(s) a la cesta');
			Swal.fire(
                '🛒',
                `Se agregó ' ${props.cantidadCarrito} ${props.nombreProducto}'(s) a la cesta`,
                'success'
              );
		} else {
			Swal.fire(
                '🛒',
                `${respuesta.msg}`,
                'error'
              );
			
		}
		await this.muestraCarrito();
		await this.cantidadProductos();
	};

	toggleVista = async (props) => {
		await this.setState({ producto: props });
		this.props.history.push('/main/vistaPrevia');
	};

	pagar = async () => {
		//console.log('llego a pagar');
		await fetch(`${this.URL}/catalogo/pagar`, this.objetoPeticion('GET'))
			.then((respuesta) => respuesta.json())
			.then((datos) => {
				this.setState({ total: 0, carrito: 0, productosCarrito: [] });
				//alert(datos.msg);
				Swal.fire('💸','Se pagó correctamente','info')
			});

		this.props.history.push('/main');
	};

	salir = () => {
		localStorage.removeItem('token');
		Swal.fire(
			'😊',
			'Hasta luego...',
			'success'
		  )
		this.props.history.push('/login');
	};

	render() {
		return (
			<>
				<div className="fondo3">
					<div className="encabezado">
						<Encabezado carrito={this.state.carrito} salir={this.salir} />
					</div>
					<Switch>
						<Route
							exact
							path="/main/carrito"
							render={() => (
								<Carrito
									productosCarrito={this.state.productosCarrito}
									total={this.state.total}
									pagar={this.pagar}
								/>
							)}
						/>
						<Route
							exact
							path="/main/vistaPrevia"
							render={() =>
								this.state.autenticado === true ? (
									<VistaPrevia producto={this.state.producto} />
								) : (
									<Redirect to="/login" />
								)
							}
						/>
						<Route
							exact
							path=""
							render={() => (
								<CatalogoProductos
									toggleVista={this.toggleVista}
									agregarProducto={this.agregaProductoCarrito}
								/>
							)}
						/>
					</Switch>
				</div>
				<Footer />
			</>
		);
	}
}

export default Main;
