import React from 'react'
import './ItemDetail.css';
import {useState} from 'react'

function ItemCount(props) {
    return (
            <div>
                <table className='tableStock' cellSpacing={0}>
                    <tbody>
                        <tr>
                            <td className='cant'>
                                Cantidad
                            </td>
                            <td className='stock' colSpan={2}>
                                Hay <label className='stockTxt'>{props.stock}</label> en Stock
                            </td>
                        </tr>
                        <tr className='tableCount'>
                            <td className='countMenos'> 
                                <button onClick={props.restarContador} className='buttonCountMenos' >-</button>
                            </td>
                            <td >
                                <button className='countText'>{props.contador}</button>
                            </td>
                            <td className='countMas'>
                                <button onClick={props.sumarContador} className='buttonCountMas' >+</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}


export default ItemCount

