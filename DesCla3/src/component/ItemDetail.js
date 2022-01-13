import React from 'react'
import './ItemDetail.css';
import {useState} from 'react'

const ItemDetail = ({producto}) => {
    const [contador, setContador] = useState(1);

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
                        <div>
                            <table className='tableStock' cellSpacing={0}>
                                <tbody>
                                    <tr>
                                        <td className='cant'>
                                            Cantidad
                                        </td>
                                        <td className='stock' colSpan={2}>
                                            Hay <label className='stockTxt'>{producto.stock}</label> en Stock
                                        </td>
                                    </tr>
                                    <tr className='tableCount'>
                                        <td className='countMenos'> 
                                            <button onClick={restarContador} className='buttonCountMenos' >-</button>
                                        </td>
                                        <td >
                                            <button className='countText'>{contador}</button>
                                        </td>
                                        <td className='countMas'>
                                            <button onClick={sumarContador} className='buttonCountMas' >+</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <br />
                        <button className='buttonItem'>Agregar al carrito</button>
                    </td>
                </tr>
                </tbody>
            </table>     
        </div>
    )
}

export default ItemDetail
