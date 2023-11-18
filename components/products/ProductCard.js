import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ item }) => {
    return (
        <div className="w-60">
            <Link href={`/products/detail/${item.slug}`}>
                <Image 
                    alt={item.title}
                    src={`/images/products/${item.image}`}
                    width={288}
                    height={288}
                />
                <div>
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                </div>                
            </Link>
        </div>
    )
}

export default ProductCard