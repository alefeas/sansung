"use client"
import { mockData } from "@/data/products.js"
import Counter from "@/components/Counter.js"
import Image from "next/image.js"
import Link from "next/link.js"

const Detail = ({params}) => {
    
    const { id } = params
    const productDetail = mockData.find(item => id === item.slug)

    return (
        <div className="flex mt-10 flex-col">
            <Link href='/products/all' className="text-blue-500 m-auto">Volver al catálogo</Link>
                <h2 className="m-auto text-4xl text-bold">Detalle de producto</h2>
            <div className="m-auto">
                <Image
                    alt={productDetail.title}
                    height={600}
                    width={600}
                    src={`/images/products/${productDetail.image}`}
                />
                <span>{productDetail.title}</span>
                <br/>
                <span>${productDetail.price}</span>
                <br/>
                <Counter/>
                <button className="mt-2 w-40 h-10 rounded bg-blue-400">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Detail