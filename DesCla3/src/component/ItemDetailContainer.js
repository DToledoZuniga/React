import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetail.css';
import { getFirestore, getDoc, doc} from 'firebase/firestore'
import ErrorItem from './ErrorItem';


const ItemDetailContainer = () => {
    const[producto, setProducto] = useState({})
    const[cargando, setCargando] = useState(true)

    const {idDetalle} = useParams()

    const db = getFirestore()
    useEffect(()=>{
        setTimeout(()=>{
            const queryProd = doc(db, 'Productos',idDetalle)
            getDoc(queryProd)
            .then(resp=> setProducto({id: resp.id, ...resp.data()}))
            .finally(()=> setCargando(false))
        },2000)
    },[idDetalle])

    return (
        <div className='divProdDetalle'>
            { cargando ? <img className='cargandoProd' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"></img>
                :
                producto.descripcion !== undefined ? <ItemDetail producto={producto}/>
                    :
                    <ErrorItem />
            }
        </div>
    )
}

export default ItemDetailContainer
