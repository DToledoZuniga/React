import {useState, createContext, useContext } from 'react'

const CartContext = createContext([])

export function useCartContext(){
    return useContext(CartContext)
}

export const CartContextProvider =({children}) =>{
    
    const [listaCarrito, setListaCarrito] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    const [cantidadProd, setCantidadProd] = useState(0)

    function aggCarrito(items){

        const indice = listaCarrito.findIndex(i => i.id === items.id)

        if(indice >= 0){
            let cantNew = listaCarrito[indice].cantidad + items.cantidad
            let totalNew = listaCarrito[indice].total + items.total
            listaCarrito[indice].cantidad = cantNew
            listaCarrito[indice].total = totalNew
            let newArray = [...listaCarrito]
            setListaCarrito(newArray)
        }
        else{
            setListaCarrito( [...listaCarrito,items] )
        }
        
        setPrecioTotal(precioTotal + items.total)
        setCantidadProd(cantidadProd + items.cantidad)
    }

    function limpiarCarrito(){
        setListaCarrito([])
        setCantidadProd(0)
        setPrecioTotal(0)
    }

    function eliminarProd(id){
        const indice = listaCarrito.findIndex(i => i.id === id)
        setPrecioTotal(precioTotal - listaCarrito[indice].total)
        setCantidadProd(cantidadProd - listaCarrito[indice].cantidad)
        listaCarrito.splice(indice,1)

        let newArray = [...listaCarrito]
        setListaCarrito(newArray)
    }

    return(
        <CartContext.Provider value={{
            listaCarrito,
            aggCarrito,
            limpiarCarrito,
            precioTotal,
            cantidadProd,
            eliminarProd
        }} >
            {children}
        </CartContext.Provider>
    )
}