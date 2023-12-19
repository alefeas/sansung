"use client"

import { useState } from "react"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/firebase/config"
import { Suspense } from "react"

const createProduct = async (values, file) => {
    const storageRef = ref(storage, values.slug)
    const fileSnapshot = await uploadBytes(storageRef, file)

    const fileURL = await getDownloadURL( fileSnapshot.ref )

    const docRef = doc(db, "products", values.slug)
    return setDoc(docRef, {
        ...values,
        image: fileURL
    })
}

const CreateForm = () => {
    const [values, setValues] = useState({ 
        title: '', 
        description: '', 
        stock: 0,
        price: 0, 
        type: '', 
        slug: '' 
    })
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        await createProduct(values, file)
        window.location.href = '/admin'
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            {
            !loading ?
            <form onSubmit={handleSubmit} className="my-12">
                <label>Slug: </label>
                <input
                    type="text"
                    value={values.slug}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="slug"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    allowMultiple={false}
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.stock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="stock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.type}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <button type="submit">Enviar</button>
            </form>
            : <>cargando...</>
            }
        </div>
    )
}

export default CreateForm