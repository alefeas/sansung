import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ item }) => {
    return (
        <div className="flex items-center p-2 border-2 h-96 w-60">
            <Link href={`/products/detail/${item.slug}`}>
                <div className="h-64 flex items-center">
                    <Image 
                        alt={item.title}
                        src={item.image}
                        width={288}
                        height={288}
                    />
                </div>
                <div>
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                </div>                
            </Link>
        </div>
    )
}

export default ProductCard