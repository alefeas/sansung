"use client"
import ProductCart from "@/components/products/ProductCart.js"
import { useCartContext } from "@/contexts/CartContext.js"
import CheckoutForm from "@/components/checkout/CheckoutForm.js"
import { useEffect } from "react"
import Link from "next/link.js"

const Cart = () => {
    const { cart, deleteItem, decrease, increase, orderId, setLoading, loading } = useCartContext()

    useEffect(() => {
        setLoading(false)
    }, [orderId])
    
    const resetCart = () => {
        window.location.href = '/products/all'
    }

    return (
        <div className="flex items-center flex-col mt-10">
            {
                !orderId ?
            <>
            <h2 className="text-2xl">Carrito</h2>
            {
                cart.length === 0 ?
                <span>El carrito está vacío</span>
                :
                cart.map(item => 
                <ProductCart key={item.slug} increase={increase} decrease={decrease} deleteItem={deleteItem} item={item}/>
            )}
            <>
            {
                cart.length === 0 ?
                <></>
                :
                <>
                <CheckoutForm/>
                </>
            }
            </>
            </>
            :
            <>
            {
                !loading ?
                <>
                    <span>Su ID de compra es: {orderId}</span>
                    <button onClick={resetCart}>Volver a comprar</button>
                </>
                : <>cargando...</>
            }
            </>
            }
        </div>
    )
}

export default Cart