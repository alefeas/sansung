"use client"
import LogoutButton from "@/components/admin/LogoutButton.js"
import { useAuthContext } from "@/contexts/AuthContext"
import Link from "next/link.js"

const AdminLayout = ({children, login}) => {
    const { user } = useAuthContext()
    return (
        <div>
            { user.logged ? <>{
                user.email === 'admin@sansung.com' ?
            children
            : <>
                <span>Usted no tiene acceso a este apartado</span>
                <LogoutButton/>
                <Link href='/products/all'>Ir al catálogo</Link>
            </>
            }</> : login }
        </div>
    )
}

export default AdminLayout