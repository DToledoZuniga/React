import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetail.css';
import { getFirestore, getDoc, doc} from 'firebase/firestore'


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
        <div className='divItemDetail'>
            { cargando ? <img className='loadingItem' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"></img>
                :
                <ItemDetail producto={producto}/>
            }
        </div>
    )
}

export default ItemDetailContainer
