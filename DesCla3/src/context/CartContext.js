import {useState, createContext, useContext } from 'react'

const CartContext = createContext([])

export function useCartContext(){
    return useContext(CartContext)
}

export const CartContextProvider =({children}) =>{

    const [cartList, setCartList] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    const [cantidadProd, setCantidadProd] = useState(0)


    function aggCarrito(items){

        const indice = cartList.findIndex(i => i.id === items.id)

        if(indice >= 0){
            let cantNew = cartList[indice].cantidad + items.cantidad
            let totalNew = cartList[indice].total + items.total
            cartList[indice].cantidad = cantNew
            cartList[indice].total = totalNew
            let newArray = [...cartList]
            setCartList(newArray)
        }
        else{
            setCartList( [...cartList,items] )
        }
        
        setPrecioTotal(precioTotal + items.total)
        setCantidadProd(cantidadProd + items.cantidad)
    }

    function limpiarCarrito(){
        setCartList([])
        setCantidadProd(0)
        setPrecioTotal(0)
    }

    function eliminarProd(id){
        const indice = cartList.findIndex(i => i.id === id)
        setPrecioTotal(precioTotal - cartList[indice].total)
        setCantidadProd(cantidadProd - cartList[indice].cantidad)
        cartList.splice(indice,1)

        let newArray = [...cartList]
        setCartList(newArray)
    }

    return(
        <CartContext.Provider value={{
            cartList,
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