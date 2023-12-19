"use client"
import { useState } from "react"
import { useCartContext } from "@/contexts/CartContext.js"
import Link from "next/link.js"

const Counter = ({item}) => {
    const [counter, setCounter] = useState(1)
    const [added, setAdded] = useState(false)
    const { addToCart } = useCartContext()

    const changeCounter = (symbol) => {
        if (symbol === '+') {
            if (item.stock >= 10) {
                if (counter < 10) {
                    setCounter(counter + 1)
                }
            } else {
                if (counter < item.stock) {
                    setCounter(counter + 1)
                }
            }
        } else if (symbol === '-') {
            if (counter > 1) {
                setCounter(counter - 1)
            }
        }
    }

    const add = (item, quantity) => {
        addToCart(item, quantity)
        setAdded(true)
    }
    return (
        <div className="text-center w-28 flex flex-col">
            {
                !added ?
                <>
                    <div className="flex justify-between items-center">
                    <button className="bg-blue-400 w-7 h-7" onClick={() => changeCounter('-')}>-</button>
                    <span className="w-5">{counter}</span>
                    <button className="bg-blue-400 w-7 h-7" onClick={() => changeCounter('+')}>+</button>
                    </div>
                    <button onClick={() => add(item, counter)} className="mt-2 w-40 h-10 rounded bg-blue-400">Agregar al carrito</button>
                </>
                :
                <div className="flex gap-5">
                    <Link href='/products/all'><button className="mt-2 w-40 h-10 rounded bg-blue-400">Volver al catálogo</button></Link>
                    <Link href='/cart'><button className="mt-2 w-40 h-10 rounded bg-blue-400">Ir al carrito</button></Link>
                </div>    
            }
        </div>
    )
}

export default Counter