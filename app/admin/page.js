import { mockData } from "@/data/products.js"
import Image from "next/image.js"

const Admin = () => {
    return (
        <div className="m-auto w-11/12 mt-10">
            <h2 className="text-2xl">Admin</h2>
            <div className="mt-10 font-medium flex items-center gap-5">
                <span className="w-96">Nombre</span>
                <span className="w-28">Precio</span>
                <span className="w-28">Stock</span>
                <span className="w-28">Tipo</span>
                <span className="w-24">Imágen</span>
                <span className="w-96">Slug</span>
                <span className="w-96">Descripción</span>
                <span className="w-96"></span>
            </div>
            {mockData.map(item =>
                <div className="flex items-center gap-5">
                    <span className="w-96">{item.title}</span>
                    <span className="w-28">${item.price}</span>
                    <span className="w-28">{item.stock}</span>
                    <span className="w-28">{item.type}</span>
                    <Image
                        width={96}
                        height={96}
                        alt={item.title}
                        src={`/images/products/${item.image}`}
                    />
                    <span className="w-96">{item.slug}</span>
                    <span className="h-10 truncate w-96">{item.description}</span>
                    <div className="justify-center w-96 flex gap-5">
                        <button className="bg-green-500 p-2 rounded">Editar</button>    
                        <button className="bg-red-500 p-2 rounded">Borrar</button>    
                    </div>
                </div>
            )}
        </div>
    )
}

export default Admin