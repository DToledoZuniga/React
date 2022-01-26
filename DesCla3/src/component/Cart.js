import { useCartContext } from "../context/CartContext"
import './Cart.css';
import {Link} from 'react-router-dom'


const Cart = () => {

    const {cartList, limpiarCarrito,eliminarProd,precioTotal, cantidadProd} = useCartContext()

    return (
        <center>
            <br/>
            <div>
                {
                    cantidadProd > 0 ?
                    <div>
                        <table className="tableCart">
                            <tbody>
                                <tr className="titulo">
                                    <td>
                                        <label>Producto</label>
                                    </td>
                                    <td>
                                        <label>Cantidad</label>
                                    </td>
                                    <td>
                                        <label>Articulo</label>
                                    </td>
                                    <td>
                                        <label>Precio</label>
                                    </td>
                                    <td>
                                        <label>Total</label>
                                    </td>
                                    <td>
                                        <label></label>
                                    </td>
                                </tr>
                            {cartList.map(prod => 
                                    <tr key={prod.id} className="detalle">
                                        <td>
                                            <img className="imgProd" src={prod.url}></img>
                                        </td>
                                        <td>
                                            <label>{prod.cantidad}</label>
                                        </td>
                                        <td>
                                            <label>{prod.nombreProducto}</label>
                                        </td>
                                        <td>
                                        <label>$ {prod.precio}</label>
                                        </td>
                                        <td>
                                        <label>$ {prod.total}</label>
                                        </td>
                                        <td>
                                            <button className="eliminarProd" onClick={() => eliminarProd(prod.id)}>Eliminar</button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        <h1>Total : $ {precioTotal}</h1>
                        <button onClick={limpiarCarrito} className="vaciarCarrito">Vaciar Carrito</button>
                    </div>
                    :
                    <div>
                        <h1>No se han agregado productos al Carrito</h1>
                        <Link to='/'>
                            <button className="vaciarCarrito">Ver Productos</button>
                        </Link>
                    </div>
                }
                
            </div>
        </center>
    )
}

export default Cart
