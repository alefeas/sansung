"use client"
import { increment, collection, updateDoc, doc, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config.js";
import { createContext, useContext, useState } from "react";
import { serverTimestamp } from "firebase/firestore";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        let found = cart.find(product => product.idItem === item.slug)
        const itemCart = {
            idItem: item.slug,
            titleItem: item.title,
            priceItem: item.price,
            imageItem: item.image,
            quantityItem: +quantity,
            stockItem: +item.stock
        }
        if (found === undefined) {
            setCart([...cart, itemCart])
        } else {
            found.quantityItem += quantity
        }
        const itemRef = doc(db, 'products', itemCart.idItem)
        updateDoc(itemRef, {
            stock: increment(-itemCart.quantityItem)
        })
    }

    const increase = (id) => {
        const index = cart.findIndex(item => item.idItem === id)
        if (cart[index].quantityItem < cart[index].stockItem && cart[index].quantityItem < 10) {
            cart[index].quantityItem += 1
            setCart([...cart])
            const itemRef = doc(db, 'products', cart[index].idItem)
            updateDoc(itemRef, {
                stock: increment(-1)
            })
        }
    }

    const decrease = (id) => {
        const index = cart.findIndex(item => item.idItem === id)
        if (cart[index].quantityItem > 1) {
            cart[index].quantityItem -= 1
            setCart([...cart])
            const itemRef = doc(db, 'products', cart[index].idItem)
            updateDoc(itemRef, {
                stock: increment(+1)
            })
        }
    }

    const deleteItem = (id) => {
        let result = cart.filter(item => item.idItem !== id)
        setCart(result)
        let item = cart.find(e => e.idItem === id)
        const itemRef = doc(db, 'products', item.idItem)
        updateDoc(itemRef, {
            stock: increment(+item.quantityItem)
        })
    }

    const [orderId, setOrderId] = useState()
    const [loading, setLoading] = useState()
    const checkout = async (name, address, email) => {
        setLoading(true)
        let itemsFromDB = cart.map(item => ({
            id: item.idItem,
            name: item.titleItem,
            price: item.priceItem,
            quantity: item.quantityItem
        }))
        console.log(itemsFromDB);
        let order = {
            buyer: {
                name: name,
                email: email,
                phone: address,
            },
            date: serverTimestamp(),
            items: itemsFromDB
        }
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then(({id}) => setOrderId(id))
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, deleteItem, increase, decrease, checkout, orderId, setLoading, loading}}>
            {children}            
        </CartContext.Provider>
    )
}