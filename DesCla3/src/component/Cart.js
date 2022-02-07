import { useCartContext } from "../context/CartContext"
import './Cart.css';
import {Link} from 'react-router-dom'
import { addDoc, collection, documentId, getDocs, getFirestore, query, Timestamp, where, writeBatch} from 'firebase/firestore'
import { useState } from "react";
import Summary from "./Summary";
import FormCart from "./FormCart";

const Cart = () => {

    const {listaCarrito, limpiarCarrito,eliminarProd,precioTotal, cantidadProd} = useCartContext()
    
    const [compra, setCompra] = useState(false)
    const [idCompra, setIdCompra] = useState('')
    const [comprador, setComprador] = useState({})
    const [total, setTotal] = useState('')

    const realizarCompra = async (nombre, apellido, email, telefono) =>{
        let orden = {}
        orden.comprador = {nombre: nombre, apellido: apellido, email: email, telefono: telefono}
        orden.total = precioTotal
        orden.fecha = Timestamp.fromDate(new Date())

        orden.items = listaCarrito.map(cartItem=>{
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio * cartItem.cantidad
            const cantidad = cartItem.cantidad

            return {id, nombre, precio, cantidad}
        })

        setComprador(orden.comprador)

        const db = getFirestore()
        const coleccion = collection(db, 'Ordenes')
        await addDoc(coleccion, orden)
        .then(res=> setIdCompra(res.id))
        .catch(err => console.log(err))

        const consultaColeccion = collection(db,'Productos')

        const actualizarStock = query(consultaColeccion, where(documentId(), 'in', listaCarrito.map(item => item.id)))

        const batch = writeBatch(db)

        await getDocs(actualizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
            stock: res.data().stock - listaCarrito.find(item => item.id === res.id).cantidad
        })))
        .catch(error => console.log(error))

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
                        <Summary idCompra={idCompra} comprador={comprador} total={total}/>
                    :
                        cantidadProd > 0 ?
                        <div>
                            <table className="tablaCarrito">
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
                                {listaCarrito.map(prod => 
                                        <tr key={prod.id} className="detalle">
                                            <td>
                                                <img className="imagenProd" src={prod.url}></img>
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
                            <FormCart realizarCompra={realizarCompra} />
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
