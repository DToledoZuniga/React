import {useState, createContext, useContext } from 'react'

const CartContext = createContext([])

export function useCartContext(){
    return useContext(CartContext)
}

export const CartContextProvider =({children}) =>{

    const [cartList, setCartList] = useState([])

    function aggCarrito(items){

        const indice = cartList.findIndex(i => i.id === items.id)

        if(indice >= 0){
            let cantNew = cartList[indice].cantidad + items.cantidad
            cartList[indice].cantidad = cantNew
            let newArray = [...cartList]
            setCartList(newArray)
        }
        else{
            setCartList( [...cartList,items] )
        }

    }

    function limpiarCarrito(){
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            aggCarrito,
            limpiarCarrito
        }} >
            {children}
        </CartContext.Provider>
    )
}