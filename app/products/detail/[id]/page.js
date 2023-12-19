import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase/config.js"
import ProductDetail from "@/components/products/ProductDetail.js"
import Link from "next/link.js"

const getProduct = async (id) => {
    const docRef = doc(db, 'products', id)
    const docSnapshot = await getDoc(docRef)
    
    return docSnapshot.data()
}

export const generateMetadata = async ({params}) => {
    const { id } = params
    const item = await getProduct(id)
    
    if (item !== undefined) {
        return {
            title: 'Sansung - ' + item.title,
            description: item.description
        }
    }
}

const Detail = async ({params}) => {
    const { id } = params
    const item = await getProduct(id)
    
    return (
        <>
        {
            item !== undefined ?    
            <ProductDetail item={item}/>
            :
            <div className="flex flex-col items-center">
                <span>No se ha encontrado ningun producto</span>
                <Link href='/products/all' className="text-blue-500 m-auto">Volver al catálogo</Link>
            </div>
        }
        </>
    )
}

export default Detail