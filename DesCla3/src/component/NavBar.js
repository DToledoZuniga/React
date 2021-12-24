import React from 'react'
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
    return (
        <div className='topnav'>
            <a className='nombreTienda'>Tienda ReactJS</a>
            <a href="">Inicio</a>
            <a href="">Productos</a>
            <CartWidget />
        </div>
    )
}

export default NavBar
