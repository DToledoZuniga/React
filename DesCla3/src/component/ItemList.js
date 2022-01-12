import React from 'react'
import {useState, useEffect} from 'react'
import Item from './Item'
import { getProductos } from './Mock'
import './Item.css';


function ItemList(props) {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        if(props.IDCategoria){
            getProductos
            .then(resp => setProductos(resp.filter(prod => prod.marca === props.IDCategoria)))
            .catch(err => console.log('Error del Proceso' + err))
            .finally(()=> setCargando(false))
        }
        else
        {
            getProductos
            .then(resp => setProductos(resp))
            .catch(err => console.log('Error del Proceso' + err))
            .finally(()=> setCargando(false))
        }
    }, [props.IDCategoria])

    return (
        <div className='divItems'>
            { cargando ? <img className='loadingItem' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"></img>
                :
            productos.map(prod => <Item key={prod.id} producto={prod} />)
            }
        </div>
    )
}

export default ItemList