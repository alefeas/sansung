import ProductList from "@/components/products/ProductList.js"
import { Suspense } from "react"

const Products = ({params}) => {
    const {category} = params

    return (
        <div>
            <Suspense fallback={<div className="h-96 flex justify-center items-center">Cargando productos...</div>}>
                <ProductList category={category}/>
            </Suspense>
        </div>
    )
}

export default Products