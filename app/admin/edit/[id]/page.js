import EditForm from "@/components/admin/EditForm.js"

const editPage = (id) => {
    return (
        <div>
            <EditForm id={id.params.id}/>
        </div>
    )
}

export default editPage