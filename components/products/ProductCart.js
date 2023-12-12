import Image from "next/image.js"

const ProductCart = ({item}) => {
    return (
        <div className="mt-10 p-5 border-2 border-zinc-100" key={item.idItem}>
            {item.titleItem}   
            <Image
            alt={item.titleItem}
            height={600}
            width={600}
            src={item.imageItem}
            /> 
            Cantidad: {item.quantityItem}
        </div> 
    )
}

export default ProductCart