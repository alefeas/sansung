import Image from "next/image.js"

const ProductCart = ({item, deleteItem, increase, decrease}) => {
    return (
        <div className="mt-10 p-5 border-2 border-zinc-100 relative" key={item.idItem}>
            {item.titleItem} 
            <svg onClick={() => deleteItem(item.idItem)} className="absolute top-4 right-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" id="x"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g stroke="#000" stroke-width="2" transform="translate(-1447 -2191)"><g transform="translate(1448 2192)"><circle cx="10" cy="10" r="10"></circle><path d="M13 7l-6 6M7 7l6 6"></path></g></g></g></svg>  
            <Image
            alt={item.titleItem}
            height={600}
            width={600}
            src={item.imageItem}
            /> 
            Cantidad: <button onClick={() => decrease(item.idItem)} className="bg-blue-400 w-6 h-6">-</button> {item.quantityItem} <button onClick={() => increase(item.idItem)} className="bg-blue-400 w-6 h-6">+</button>
        </div> 
    )
}

export default ProductCart