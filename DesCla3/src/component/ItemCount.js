import React from 'react'
import './ItemDetail.css';
import {useState} from 'react'

function ItemCount(props) {

    const [contador, setContador] = useState(1);

    function sumarContador()
    {
        if(contador+1 <= props.stock)
        {
            setContador(contador+1)
            props.saveCount(contador+1)
        }
    }

    function restarContador()
    {
        if(contador-1 >= 1)
        {
            setContador(contador-1)
            props.saveCount(contador-1)
        }
    }

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
    )
}


export default ItemCount

