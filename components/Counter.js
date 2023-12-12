"use client"
import { useState } from "react"
import { useCartContext } from "@/contexts/CartContext.js"

const Counter = ({item}) => {
    const [counter, setCounter] = useState(1)
    const { addToCart } = useCartContext()

    const changeCounter = (symbol) => {
        if (symbol === '+') {
            if (counter < 10) {
                setCounter(counter + 1)
            }
        } else if (symbol === '-') {
            if (counter > 1) {
                setCounter(counter - 1)
            }
        }
    }
    return (
        <div className="text-center w-28 flex flex-col">
            <div className="flex justify-between items-center">
                <button className="bg-blue-400 w-7 h-7" onClick={() => changeCounter('-')}>-</button>
                <span className="w-5">{counter}</span>
                <button className="bg-blue-400 w-7 h-7" onClick={() => changeCounter('+')}>+</button>
            </div>
            <button onClick={() => addToCart(item, counter)} className="mt-2 w-40 h-10 rounded bg-blue-400">Agregar al carrito</button>
        </div>
    )
}

export default Counter