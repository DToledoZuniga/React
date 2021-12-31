import React from 'react'
import {useState, useEffect} from 'react'
import Item from './Item'
import { getProductos } from './Mock'
import './Item.css';


function ItemList() {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        getProductos
        .then(resp => setProductos(resp))
        .catch(err => console.log('Error del Proceso' + err))
        .finally(()=> setCargando(false))
    }, [])

    return (
        <div>
            { cargando ? <img className='loadingItem' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"></img>
                :
            productos.map(prod => <Item key={prod.id} producto={prod} />)
            }
        </div>
    )
}

export default ItemList