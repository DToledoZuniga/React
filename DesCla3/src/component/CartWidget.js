import './CartWidget.css';
import { useCartContext } from '../context/CartContext';

function CartWidget() {

    const {cantidadProd} = useCartContext()

    return (
        <div className='divCarrito'>
                {cantidadProd > 0 && <div className='circulo'>{cantidadProd}</div>}
                <img className='carrito' src='https://i.pinimg.com/originals/4a/38/7b/4a387bda853bca3782d73234c786a150.png'></img>
        </div>
    )
}

export default CartWidget
