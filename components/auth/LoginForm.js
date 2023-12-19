"use client"
import { useState } from "react"
import { useAuthContext } from "@/contexts/AuthContext"

const LoginForm = () => {
    const { createUser, loginUser } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className="w-screen h-96 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-blue-200 py-4 px-6 rounded-xl max-w-md w-full">
                <h2>Login</h2>
                <input
                    type="email"
                    value={values.email}
                    required
                    placeholder="Tu email"
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    value={values.password}
                    required
                    placeholder="Tu password"
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="password"
                    onChange={handleChange}
                />
                <button onClick={() => loginUser(values)} className="mr-4">Ingresar</button>
                <button onClick={() => createUser(values)}>Registrarme</button>
                <button onClick={null} className="mt-2 block">Ingresar con Google</button>
            </form>
        </div>
    )
}

export default LoginForm