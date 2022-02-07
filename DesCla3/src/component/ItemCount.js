import './ItemDetail.css';
import {useState} from 'react'

function ItemCount(props) {

    const [contador, setContador] = useState(1);

    function sumarContador()
    {
        if(contador+1 <= props.stock)
        {
            setContador(contador+1)
            props.guardarCantidad(contador+1)
        }
    }

    function restarContador()
    {
        if(contador-1 >= 1)
        {
            setContador(contador-1)
            props.guardarCantidad(contador-1)
        }
    }

    return (
            <div>
                <table className='tablaStock' cellSpacing={0}>
                    <tbody>
                        <tr>
                            <td className='cantidad'>
                                Cantidad
                            </td>
                            <td className='stock' colSpan={2}>
                                Hay <label className='stockTexto'>{props.stock}</label> en Stock
                            </td>
                        </tr>
                        <tr>
                            <td className='contadorMenos'> 
                                <button onClick={restarContador} className='botonContadorMenos' >-</button>
                            </td>
                            <td >
                                <button className='contadorTexto'>{contador}</button>
                            </td>
                            <td className='contadorMas'>
                                <button onClick={sumarContador} className='botonContadorMas' >+</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}


export default ItemCount

