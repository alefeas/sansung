"use client"
import ProductCart from "@/components/products/ProductCart.js"
import { useCartContext } from "@/contexts/CartContext.js"

const Cart = () => {
    const { cart } = useCartContext()

    return (
        <div className="flex items-center flex-col mt-10">
            <h2 className="text-2xl">Carrito</h2>
            {cart.map(item => 
                <ProductCart item={item}/>
            )}
            <span>El carrito está vacío</span>
        </div>
    )
}

export default Cart