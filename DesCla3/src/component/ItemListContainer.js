import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {
    

    return (
        <div>
            <h1>Bienvenido {props.nombre}</h1>
            <ItemCount stock={5} inicio={1} />
        </div>
    )
}

export default ItemListContainer
