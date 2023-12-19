import DeleteConfirm from "@/components/admin/DeleteConfirm.js";

const deletePage = (id) => {
    return (
        <>
        <DeleteConfirm id={id}/>
        </>
    )
}

export default deletePage