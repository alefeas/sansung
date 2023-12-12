import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase/config.js"
import ProductDetail from "@/components/products/ProductDetail.js"

const getProduct = async (id) => {
    const docRef = doc(db, 'products', id)
    const docSnapshot = await getDoc(docRef)

    return docSnapshot.data()
}

const Detail = async ({params}) => {
    const { id } = params

    const item = await getProduct(id)

    return (
        <ProductDetail item={item}/>
    )
}

export default Detail