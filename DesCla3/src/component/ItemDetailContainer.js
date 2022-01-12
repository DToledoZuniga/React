import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { getProductos } from './Mock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[producto, setProducto] = useState({})

    const {idDetalle} = useParams()

    useEffect(()=>{
        getProductos
        .then(resp => setProducto(resp.find(prod => prod.id === idDetalle)))
    },[idDetalle])

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
