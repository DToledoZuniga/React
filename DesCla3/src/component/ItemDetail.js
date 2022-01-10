import React from 'react'
import './ItemDetail.css';

const ItemDetail = ({producto}) => {
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
                        <h4>Stock Disponible : {producto.stock}</h4>
                    </td>
                </tr>
                </tbody>
            </table>     
        </div>
    )
}

export default ItemDetail
