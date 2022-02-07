import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer() {
    
    const {idCategoria} = useParams()
    let marca = idCategoria

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        const db = getFirestore()
        const coleccion = collection(db,'Productos')
        const filtroColeccion = idCategoria ? query(coleccion, where('marca', '==', marca)) : coleccion
 
        getDocs(filtroColeccion)
            .then(res=> setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log('Error del Proceso' + err))
            .finally(()=> setCargando(false))

    }, [idCategoria])

    return (
        <div>
            <br/>
            { cargando ? <img className='cargandoProd' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"></img>
                :
                <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer
