import './ItemDetail.css';
import {useState} from 'react'
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext';

const BotonAgregar=({cambioBtn})=>{
    return (
        <button className='botonProdDetalle' onClick={cambioBtn}>Agregar al carrito</button>
    )
}

const BotonCarrito=()=>{
    return(
        <Link to='/cart'>
            <button className='botonProdDetalleCarrito' >Ir al Carrito</button>
        </Link>
    )
}


const ItemDetail = ({producto}) => {
    let contador = 1
    const {cartList,aggCarrito} = useCartContext()

    const[tipoBoton, setTipoBoton] = useState('agregar')

    const cambioBtn=()=>{
        setTipoBoton('cart')
        aggCarrito({...producto, cantidad: contador, total: (producto.precioInt * contador)})
    }

    const guardarCantidad=(count)=>{
        contador = count
    }
    

    return (
        <div className='div'>
            <table className='tabla'>
                <tbody>
                <tr>
                    <td className='divImagen'>
                        <img className='imagenProductoDetail' src={producto.url}></img>
                    </td>
                    <td className='divTexto'>
                        <h2 className='nombreProducto'>{producto.nombre}</h2>
                        <br />
                        <label>{producto.descripcion}</label>
                        <br />
                        <h3>Precio : $ {producto.precio}</h3>
                        <br />
                        <ItemCount stock={producto.stock} guardarCantidad={guardarCantidad}/>
                        <br />
                        <br />
                        {
                            tipoBoton === 'agregar' ?
                                <BotonAgregar cambioBtn={cambioBtn}/>
                            :
                                <BotonCarrito />
                        }
                    </td>
                </tr>
                </tbody>
            </table>     
        </div>
    )
}

export default ItemDetail
