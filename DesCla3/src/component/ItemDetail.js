import React from 'react'
import './ItemDetail.css';
import {useState} from 'react'
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'

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
    const[tipoBoton, setTipoBoton] = useState('agregar')
    const [contador, setContador] = useState(1);

    const cambioBtn=()=>{
        setTipoBoton('cart')
        console.log('Seleccionaste ' + contador + ' productos')
    }

    function sumarContador()
    {
        if(contador+1 <= producto.stock)
        {
            setContador(contador+1)
        }
    }

    function restarContador()
    {
        if(contador-1 >= 1)
        {
            setContador(contador-1)
        }
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
                        <h3>Precio : {producto.precio}</h3>
                        <br />
                        <ItemCount stock={producto.stock} sumarContador={sumarContador} restarContador={restarContador} contador={contador}/>
                        <br />
                        <br />
                        {
                            tipoBoton === 'agregar' ?
                                <ButtonAgg cambioBtn={cambioBtn} />
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
