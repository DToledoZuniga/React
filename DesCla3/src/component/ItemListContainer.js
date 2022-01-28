import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {useState, useEffect} from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer(props) {
    
    const {idCategoria} = useParams()
    let marca = idCategoria

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        const db = getFirestore()


        if(marca){
            const queryCollection = query(collection(db,'Productos'), where('marca','==',marca))
            getDocs(queryCollection)
            .then(res=> setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log('Error del Proceso' + err))
            .finally(()=> setCargando(false))
        }
        else
        {
            const queryCollection = query(collection(db,'Productos'))
            getDocs(queryCollection)
            .then(res=> setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log('Error del Proceso' + err))
            .finally(()=> setCargando(false))
        }
    }, [idCategoria])

    return (
        <div>
            <br/>
            { cargando ? <img className='loadingItem' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"></img>
                :
                <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer
