import Link from "next/link"

const MenuList = () => {
    return (
        <nav className="mr-8 flex gap-5">
            <Link href={"/"}>Inicio</Link>
            <Link href={"/products/all"}>Productos</Link>
            <Link href={"/cart"}>Carrito</Link>
        </nav>
    )
}   

export default MenuList