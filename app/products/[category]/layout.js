import Link from "next/link"

const ProductsLayout = ({children}) => {

    return (
        <div className="container m-auto">
            <nav className="flex gap-10 py-4">
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