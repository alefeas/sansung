"use client"

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config.js";
import Link from "next/link.js"
import { useParams } from "next/navigation.js";

const DeleteConfirm = () => {
    const {id} = useParams()

    const deleteItem = async () => {
        const itemRef = doc(db, 'products', id)
        await deleteDoc(itemRef)
        window.location.href = '/admin'
    }

    return (
        <div className="flex justify-center flex-col items-center mt-8">
            <span>¿Estás seguro de eliminar este producto?</span>
            <div className="mt-2 flex gap-5">
                <button className="bg-green-100 w-12 h-7" onClick={deleteItem}>SI</button>
                <Link className="flex items-center justify-center bg-red-100 w-12 h-7" href='/admin'>NO</Link>
            </div>
        </div>
    )
}

export default DeleteConfirm