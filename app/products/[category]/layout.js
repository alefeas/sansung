import Link from "next/link"

const ProductsLayout = ({children}) => {

    return (
        <div className="container m-auto">
            <h2 className="justify-center flex m-auto mt-5 text-2xl">Productos</h2>
            <nav className="flex gap-10 justify-center py-4 mb-2">
                <Link href={"/products/all"}>Todos</Link>
                <Link href={"/products/tvs"}>TVs</Link>
                <Link href={"/products/refrigerators"}>Heladeras</Link>
                <Link href={"/products/washing-machine"}>Lavarropas</Link>
            </nav>
            {children}
        </div>
    )
}

export default ProductsLayout