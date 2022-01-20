import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { getProductos } from './Mock'
import {useState, useEffect} from 'react'



function ItemListContainer(props) {
    
    const {idCategoria} = useParams()
    let marca = idCategoria

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        if(marca){
            getProductos
            .then(resp => setProductos(resp.filter(prod => prod.marca === marca)))
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
