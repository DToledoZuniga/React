import React from 'react'
import CartWidget from './CartWidget';
import './NavBar.css';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className='topnav'>
            <div className='navLogo'>
                <Link to='/' className='nombreTienda'>Tienda ReactJS</Link>
            </div>
            <div className='navMenu'>
                <Link to='/'>Inicio</Link>
                <Link to='/categoria/Adidas'>Adidas</Link>
                <Link to='/categoria/Nike'>Nike</Link>
            </div>
            <div className='navCart'>
                <Link to ='/cart'>
                    <CartWidget />
                </Link>
            </div>
        </div>
    )
}

export default NavBar
