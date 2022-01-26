import React, { useContext } from 'react'
import './ItemDetail.css';
import {useState} from 'react'
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext';

const ButtonAgg=({cambioBtn})=>{
    return (
        <button className='buttonItemDetail' onClick={cambioBtn}>Agregar al carrito</button>
    )
}

const ButtonCart=()=>{
    return(
        <Link to='/cart'>
            <button className='buttonItemDetailCart' >Ir al Carrito</button>
        </Link>
    )
}


const ItemDetail = ({producto}) => {
    let contador = 1
    const {cartList,aggCarrito} = useCartContext()

    const[tipoBoton, setTipoBoton] = useState('agregar')
    console.log(cartList)
    const cambioBtn=()=>{
        setTipoBoton('cart')
        aggCarrito({...producto, cantidad: contador, total: (producto.precioInt * contador)})
    }

    const saveCount=(count)=>{
        contador = count
    }
    

    return (
        <div className='div'>
            <table className='table'>
                <tbody>
                <tr>
                    <td className='divImg'>
                        <img className='imgProduct' src={producto.url}></img>
                    </td>
                    <td className='divTxt'>
                        <h2 className='nombreProducto'>{producto.nombreProducto}</h2>
                        <br />
                        <label>{producto.descripcion}</label>
                        <br />
                        <h3>Precio : $ {producto.precio}</h3>
                        <br />
                        {/* <ItemCount stock={producto.stock} sumarContador={sumarContador} restarContador={restarContador} contador={contador}/> */}
                        <ItemCount stock={producto.stock} saveCount={saveCount}/>
                        <br />
                        <br />
                        {
                            tipoBoton === 'agregar' ?
                                <ButtonAgg cambioBtn={cambioBtn}/>
                            :
                                <ButtonCart />
                        }
                    </td>
                </tr>
                </tbody>
            </table>     
        </div>
    )
}

export default ItemDetail
