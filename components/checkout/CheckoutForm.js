"use client"
import { useCartContext } from "@/contexts/CartContext.js"
import { useState } from "react"
const CheckoutForm = () => {
    const { checkout } = useCartContext()

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div>
            <form className="my-12">
                <input
                    type="text"
                    placeholder="Nombre y apellido"
                    onChange={event => setName(event.target.value)}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />
                <input
                    type="text"
                    placeholder="Dirección"
                    onChange={event => setAddress(event.target.value)}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />
                <input
                    type="email"
                    placeholder="Dirección"
                    onChange={event => setEmail(event.target.value)}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />
                <span onClick={() => checkout(name, address, email)}>Comprar</span>
            </form>
        </div>
    )
}

export default CheckoutForm