import ProductList from "@/components/products/ProductList.js"
import { Suspense } from "react"

export const generateMetadata = async ({params}) => {
    if (params.category === 'all') {
        return {
            title: 'Sansung - All Products'
        }
    } else if (params.category === 'tvs') {
        return {
            title: 'Sansung - Tvs'
        }
    } else if (params.category === 'refrigerators') {
        return {
            title: 'Sansung - Refrigerators'
        }
    } else if (params.category === 'washing-machine') {
        return {
            title: 'Sansung - Washing Machine'
        }
    }
}

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