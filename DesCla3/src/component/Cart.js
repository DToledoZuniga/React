import { useCartContext } from "../context/CartContext"
import './Cart.css';
import {Link} from 'react-router-dom'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch} from 'firebase/firestore'
import { useState } from "react";
import Resumen from "./Resumen";


const Cart = () => {

    const {cartList, limpiarCarrito,eliminarProd,precioTotal, cantidadProd} = useCartContext()

    const [compra, setCompra] = useState(false)
    const [idCompra, setIdCompra] = useState('')
    const [comprador, setComprador] = useState({})
    const [total, setTotal] = useState('')

    const realizarCompra = async () =>{
        let orden = {}

        orden.comprador = {nombre: 'Diego', email: 'diego@gmail.com', telefono: '1234567'}
        orden.total = precioTotal

        orden.items = cartList.map(cartItem=>{
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio * cartItem.cantidad
            const cantidad = cartItem.cantidad

            return {id, nombre, precio, cantidad}
        })

        setComprador(orden.comprador)

        const db = getFirestore()
        const ordenCollection = collection(db, 'Ordenes')
        await addDoc(ordenCollection, orden)
        .then(res=> setIdCompra(res.id))
        .catch(err => console.log(err))

        const queryCollection = collection(db,'Productos')

        const queryActualizarStock = query(queryCollection, where(documentId(), 'in', cartList.map(item => item.id)))

        const batch = writeBatch(db)

        await getDocs(queryActualizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        })))
        .catch(error => console.log(error))
        .finally(()=> console.log('Stock Actualizado'))

        batch.commit()
        setTotal(precioTotal)
        setCompra(true)
        limpiarCarrito()
    }

    return (
        <center>
            <br/>
            <div>
                {
                    compra ?
                        <Resumen idCompra={idCompra} comprador={comprador} total={total}/>
                    :
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
                                                <label>{prod.nombre}</label>
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
                            <button onClick={realizarCompra} className="vaciarCarrito">Generar Orden</button>
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
