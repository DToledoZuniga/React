import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer(props) {
    

    return (
        <div>
            <h1>Bienvenido {props.nombre}</h1>
            {/* <ItemCount stock={5} inicio={1} /> */}
            <br/>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
