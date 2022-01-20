import React from 'react'
import Item from './Item'
import './Item.css';
import {useState} from 'react'


function ItemList(props) {
    
    return (
        <div className='divItems'>
            {props.productos.map(prod => <Item key={prod.id} producto={prod} />)}
        </div>
    )
}

export default ItemList