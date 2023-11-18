"use client"
import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(1)
    
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
        <div className="text-center w-28 flex justify-between items-center">
            <button className="bg-blue-400 w-7 h-7" onClick={() => changeCounter('-')}>-</button>
            <span className="w-5">{counter}</span>
            <button className="bg-blue-400 w-7 h-7" onClick={() => changeCounter('+')}>+</button>
        </div>
    )
}

export default Counter