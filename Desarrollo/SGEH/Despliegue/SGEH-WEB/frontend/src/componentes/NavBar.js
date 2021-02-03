import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import imagen1 from '../assets/img/logoHolimori.svg';

export const NavBar = () => {

    const activador = useRef(true);

    

    const handleToggle = () => {
        
        let barIconX = document.querySelector('.btn-menu i');
        let menu = document.querySelector('.nav-container');
        //Icon X
        barIconX.classList.toggle('fa-times');
        
        if(activador.current){
            menu.style.left = '0%'; 
            menu.style.transition = '0.5s';       
            activador.current = false;
        }
        else{
            menu.style.left = '-150%';       
            activador.current = true;
        }
    }

    
    const test = localStorage.getItem('token') || null;
    useEffect(() => {
        //console.log(test);
    }, [test])
    
    return (
        <div id="header">
            <nav className="menu">
            <div className="logo-nav-box">
                <div className="logo-box">
                    
                    <Link to="/" className="logoHoliMori"><img src={imagen1} alt="holi-mori" className = "img-logo"/></Link>
                    
                    <span className="btn-menu span-1"><i className="fas fa-bars" onClick={handleToggle}></i></span>
                </div>
            </div>
            <div className="nav-container">
                
                <ul className = "nav-list">
                    <li><NavLink to="/inicio">Inicio</NavLink></li>
                    <li><NavLink to="about">Nosotros</NavLink></li>
                    <li><NavLink to="/main">Precios</NavLink></li>
                   
                    
                    {
                        (!test) && (<li ><NavLink to="/login" className="active" >Iniciar sesión</NavLink></li>)
                    }
                    

                    {
                        (!test) && (<li ><NavLink to="/signin" className="active">Registrate</NavLink></li>)
                    }

                    
                </ul> 
            </div>
        </nav>
        </div>
    )
}
