import React from 'react'
import './Item.css';

function Item(props) {
    return (
        <div key={props.producto.id}>
            <center>
                <div className='divProd'>
                    <div className='divHead'>
                        Notebook - {props.producto.marca}
                    </div>
                    <div>
                        <img src={props.producto.url} />
                        <label className='priceItem'>${props.producto.precio}</label> 
                    </div>
                    <div>
                        <button className='buttonItem'> Detalle Producto </button>
                    </div>
                </div>
            </center>
            <br/>
        </div>
    )
}

export default Item