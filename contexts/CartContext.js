"use client"
import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        let found = cart.find(product => product.idItem === item.slug)
        const itemCart = {
            idItem: item.slug,
            titleItem: item.title,
            imageItem: item.image,
            quantityItem: quantity
        }
        if (found === undefined) {
            setCart([...cart, itemCart])
        } else {
            found.quantityItem += quantity
        }
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}            
        </CartContext.Provider>
    )
}