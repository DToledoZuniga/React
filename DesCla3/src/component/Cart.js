import { useCartContext } from "../context/CartContext"


const Cart = () => {

    const {cartList, limpiarCarrito} = useCartContext()

    return (
        <div>
            {cartList.map(prod => <li key={prod.id}>{prod.nombreProducto} - Cantidad : {prod.cantidad}</li>)}
            <button onClick={limpiarCarrito}>Limpiar</button>
        </div>
    )
}

export default Cart
