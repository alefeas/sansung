import Counter from "@/components/Counter.js"
import Image from "next/image.js"
import Link from "next/link.js"

const ProductDetail = ({item}) => {

    return (
        <div className="flex mt-10 flex-col">
            <Link href='/products/all' className="text-blue-500 m-auto">Volver al catálogo</Link>
                <h2 className="m-auto text-4xl text-bold">Detalle de producto</h2>
            <div className="m-auto">
                <Image
                    alt={item.title}
                    height={600}
                    width={600}
                    src={item.image}
                />
                <span>{item.title}</span>
                <br/>
                <span>${item.price}</span>
                <br/>
                <Counter item={item}/>
            </div>
        </div>
    )
}

export default ProductDetail