import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

class Signin extends React.Component{

    URL = 'http://localhost:4000'

    state = {}

    handleCampos = (e) => { 
        this.setState({     
            [e.target.name]: e.target.value 
         })
    }

    handleFormulario = async (e) => {
        e.preventDefault()
        //console.log("signin: ",this.state) 
        
        try {
            const peticion = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)             
            } 
            const respuesta = await fetch(`${this.URL}/API/nuevoUsuario`,peticion)
            let json = await respuesta.json()
            //console.log(json)

            if(json.resultado === "SI") {                             
            //   alert(json.msg)
              Swal.fire(
                '😎',
                `${json.msg}`,
                'success'
              )
              this.props.history.push('/login')  
            }else{
            //   alert(json.msg);
              Swal.fire(
                '😢',
                `${json.msg}`,
                'error;'
              )
            }

        } catch (error) {
            //console.log("Hubo error al hacer login: ", error)
        }

    }

    render(){
        return(
            <div className="bg-yellow-400">
                <div className="flex items-center justify-center text-center h-screen ">
                    <form className="bg-gray-200 rounded-md shadow-xl px-10 py-12 md:w-96" onSubmit={this.handleFormulario}>
                        <h1 className="text-4xl font-serif text-yellow-700 mb-2">Registrate!</h1>
                        <div className='w-full h-1 border border-t-0 border-b-4 border-yellow-600  mb-10 '></div>
                        <div>
                            <label className='flex flex-start mb-2 '>Nombre:</label>
                            <input type="text" name="nombre" onChange={this.handleCampos} className="w-full rounded outline-none mb-4 px-2 py-1 text-gray-800 border focus:border-yellow-300" autoComplete="off" placeholder="Ingresa tu nombre" autoFocus required/>
                        </div>
                        <div>
                            <label className='flex flex-start mb-2 '>Correo electrónico:</label>
                            <input type="text" name="correo" onChange={this.handleCampos} className="w-full rounded outline-none mb-4 px-2 py-1 text-gray-800 border focus:border-yellow-300" autoComplete="off" placeholder="correo@gmail.com" required/>
                        </div>
                        <div>
                            <label className='flex flex-start mb-2 '>Contraseña:</label>
                            <input type="password" name="contrasena1" onChange={this.handleCampos}  className="w-full rounded outline-none mb-4 px-2 py-1 text-gray-800 border focus:border-yellow-300" autoComplete="off" placeholder="Ingresa tu contraseña" required/>
                        </div>
                        <div>
                            <label className='flex flex-start mb-2 '>Confirma Contraseña:</label>
                            <input type="password" name="contrasena2" onChange={this.handleCampos} className="w-full rounded outline-none mb-4 px-2 py-1 text-gray-800 border focus:border-yellow-300" autoComplete="off" placeholder="Confirma tu contraseña" required/>
                        </div>
                            
                        <button type="submit" className="w-full h-8 rounded text-white bg-yellow-700 text-lg hover:bg-yellow-600 mb-4" onClick={this.handleFormulario}>Confirmar Registro 🎉</button>
                    
                        <Link to="login"><strong className="cursor-pointer text-yellow-500">Inicia sesión ⭐</strong></Link>
                    </form>

                </div>
            </div>
        )
    }

}

export default Signin