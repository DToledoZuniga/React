import React from 'react'
import {useState} from 'react'

function ItemCount(props) {
    const [contador, setContador] = useState(props.inicio);
    const [stock, setStock] = useState(props.stock);

    function sumarContador()
    {
        if(contador+1 <= stock)
        {
            setContador(contador+1)
        }
    }

    function restarContador()
    {
        if(contador-1 >= props.inicio)
        {
            setContador(contador-1)
        }
    }

    function agregarCarrito()
    {
        if(stock == 0)
        {
            alert("No hay Stock");
        }
        else{
            alert("Se agregarón " + contador + " Productos al Carrito")
            setStock(stock-contador)
            setContador(1)
        }
    }

    return (
        <div>
            <h3>Stock : {stock}</h3>
            <button onClick={restarContador}>-</button>
            {contador}
            <button onClick={sumarContador}>+</button>
            <br/>
            <button onClick={agregarCarrito}>Agregar al Carrito</button>
        </div>
    )
}


export default ItemCount

