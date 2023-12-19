import { collection, getDocs, query, where } from "firebase/firestore";
import ProductCard from "./ProductCard.js";
import { db } from "@/firebase/config.js";
import Link from "next/link.js";

const getProducts = async (category) => {
    const productsRef= collection(db, 'products')

    const q = category === 'all' ? productsRef : query(productsRef, where("type", "==", category))

    const querySnapshot = await getDocs(q)
    
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

const ProductList = async ({category}) => {
    const items = await getProducts(category)
    
    return (
        <div className="flex flex-wrap justify-center gap-10 w-9/12 m-auto">
            {
            items.length === 0 ?
            <div className="flex flex-col items-center">
                <span>No se ha encontrado ningun producto</span>
                <Link href='/products/all' className="text-blue-500 m-auto">Volver al catálogo</Link>
            </div>
            :
            items.map(product => <ProductCard key={product.slug} item={product}/>)
        }
        </div>
    )
}

export default ProductList