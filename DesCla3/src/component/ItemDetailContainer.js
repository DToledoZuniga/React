import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { getProductos } from './Mock'
import { useParams } from 'react-router-dom'
import './ItemDetail.css';

const ItemDetailContainer = () => {
    const[producto, setProducto] = useState({})
    const[cargando, setCargando] = useState(true)

    const {idDetalle} = useParams()

    useEffect(()=>{
        setTimeout(()=>{
            getProductos
            .then(resp => setProducto(resp.find(prod => prod.id === idDetalle)))
            .finally(()=> setCargando(false))
        },2000)
    },[idDetalle])


    return (
        <div className='divItemDetail'>
            { cargando ? <img className='loadingItem' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"></img>
                :
                <ItemDetail producto={producto}/>
            }
        </div>
    )
}

export default ItemDetailContainer
