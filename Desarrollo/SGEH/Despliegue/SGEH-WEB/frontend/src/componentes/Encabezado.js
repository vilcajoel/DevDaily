import { Badge } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';



const Encabezado = (props) =>  (
        <div className="navbar">
            <div>
                <h1>Holi - Mori</h1>
            </div>
            <div>  
                <Link to = "/inicio"className="espaciado1"><Badge color="secondary"><HomeIcon className="icon"/></Badge></Link>
              
                <Link to="/main/carrito" className="espaciado1 link"><Badge badgeContent={props.carrito} color="secondary"><ShoppingCartIcon className="icon"/></Badge></Link>
                
                <span className="espaciado1" onClick={() => props.salir()}><Badge color="secondary"><ExitToAppIcon className="icon"/></Badge></span>
            </div>
        </div>
    )
export default Encabezado;