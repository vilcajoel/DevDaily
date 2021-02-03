import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import CatalogoProductos from './CatalogoProductos';


class Login extends React.Component {

    URL = 'http://localhost:4000'

    state = {}

    objetoPeticion = (metodo,datos) => {
        return ({
            method: metodo,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
                'Host': ''
            },
            body: JSON.stringify(datos)
        })
    }

    handleFormulario = async (e) => {
        e.preventDefault()
        //console.log(this.state)

        try {
            const respuesta = await fetch(`${this.URL}/API/login`,this.objetoPeticion("POST",this.state))
            let json = await respuesta.json()
            //console.log(json)

            if(json.resultado === "Autorizado")
            {
              localStorage.setItem('token',json.token) 
            //   alert(json.msg)
              Swal.fire(
                '😎',
                `${json.msg}`,
                'success'
              )
              this.props.history.push('/main')  
            }else{
            //   alert(json.msg)
              Swal.fire(
                '😢',
                `${json.msg}`,
                'error'
              )
            }

        } catch (error) {
            //console.log("Hubo error al hacer login: ", error)
        }

    }

    handleCampos = (e) => {
        this.setState({
            [e.target.name]: e.target.value  
        })
    }

    componentDidMount(){
        fetch(`${this.URL}/catalogo/inventarioInicial`,this.objetoPeticion("GET"))
        .then(respuesta => respuesta.json())
        .then(datos => console.log(''))
    }

    render (){
        return (
            <div className="bg-yellow-400">
                <div className="flex items-center justify-center text-center h-screen ">
                    <form className="bg-gray-200 rounded-md shadow-xl px-10 py-12" onSubmit={this.handleFormulario}>
                        <h1 className="text-4xl font-serif text-yellow-700 mb-2">Iniciar sesión</h1>
                        <div className='w-full h-1 border border-t-0 border-b-4 border-yellow-600  mb-10 '></div>
                        <label className='flex flex-start mb-2 '>Correo electrónico:</label>
                        <input type="text" placeholder='correo@gmail.com' name="email" onChange={this.handleCampos} className="w-full rounded outline-none mb-4 px-2 py-1 text-gray-800 border focus:border-yellow-300" autoComplete="off" autoFocus required/>

                        <label className='flex flex-start mb-2'>Digite contraseña:</label>
                        <div className="contrasena-box">
                            <input type="password" placeholder='********' name="pass" onChange={this.handleCampos} className="w-full rounded outline-none mb-4 px-2 py-1 text-gray-800 border focus:border-yellow-300" autoComplete="off" required/>
                        </div>
                        
                        <button type="submit" className="w-full h-8 rounded text-white bg-yellow-700 text-lg hover:bg-yellow-600 mb-4" onClick={this.handleFormulario}>Ingresar 🤩</button>   
                        <Link to="signin" className="">Eres nuevo? <strong className="cursor-pointer text-yellow-500">Registrate primero! 📰</strong></Link>
                    </form>
                
                </div>
            </div>
        )

    }


}


export default Login