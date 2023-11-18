import ProductCard from "@/components/products/ProductCard.js"
import { mockData } from "@/data/products.js"

const Products = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10 w-8/12 m-auto">
            {
                mockData.map(item =>
                    <ProductCard item={item}/>
                )
            }
        </div>
    )
}

export default Products