import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { getProductos } from './Mock'

const ItemDetailContainer = () => {
    const[producto, setProducto] = useState({})
    useEffect(()=>{
        getProductos
        .then(resp => setProducto(resp.find(prod => prod.id === "0")))
    },[])

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
