import React from 'react'
import './Item.css';
import {Link, NavLink} from 'react-router-dom'

function Item(props) {
    return (
        <div key={props.producto.id} className='divItemUnit'>
            <center>
                <div className='divProd'>
                    <div className='divHead'>
                        Zapatilla - {props.producto.marca}
                    </div>
                    <div >
                        <img className='imgItem' src={props.producto.url} />
                        <label className='priceItem'>${props.producto.precio}</label> 
                    </div>
                    <div>
                        <Link to={`/detalle/${props.producto.id}`}>
                            <button className='buttonItem'> Detalle Producto </button>
                        </Link>
                    </div>
                </div>
            </center>
            <br/>
        </div>
    )
}

export default Item