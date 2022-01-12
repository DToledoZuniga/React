import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer(props) {
    
    const {idCategoria} = useParams()

    return (
        <div>
            <br/>
            <ItemList IDCategoria={idCategoria}/>
        </div>
    )
}

export default ItemListContainer
