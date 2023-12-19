"use client"
import { useAuthContext } from "@/contexts/AuthContext"

const LogoutButton = () => {
    const { logout } = useAuthContext()

    return <button onClick={logout} className="bg-red-500">Cerrar sesión</button>
}

export default LogoutButton