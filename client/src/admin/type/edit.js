import AdminFormHeading from "../../components/admin-form-heading"
import Input from "../../components/input"
import { editType } from "../../managers/types"

export const EditProduct = ({ displayEditTypeForm, setDisplayEditTypeForm, handleGetTypes, typeToEdit, setTypeToEdit }) => {
    // handle function for edit type form
    const handleEditTypeForm = (event) => {
        const copy = { ...typeToEdit }
        const { name, value } = event.target
        if (name === "name") {
            copy.name = value
            setTypeToEdit(copy)
        }
    }
    // handle function to edit type
    const handleEditType = () => {
        editType(typeToEdit).then(() => {
            setTypeToEdit({})
            handleGetTypes()
        })
    }
    // hanle function to cancel edit type form
    const handleCancelEditTypeForm = () => {
        setDisplayEditTypeForm(false)
    }
    return (
        <div className={`md:bg-white md:border md:flex flex-col ${displayEditTypeForm ? "flex" : "hidden"} gap-5 p-5 md:rounded-lg`}>
            <div className="flex flex-wrap justify-between mb-3">
                <AdminFormHeading formTitle="Edit a type" onClick={() => setTypeToEdit({})} />
            </div>
            <div className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <Input inputName="name" inputStyle="inline" inputType="text" onChange={handleEditTypeForm} required value={typeToEdit.name || ""}>
                        * Name
                    </Input>
                </div>
            </div>
            <button className="button-secondary md:hidden text-2xl" onClick={handleCancelEditTypeForm}>Cancel</button>
            <button className="button-primary text-2xl" onClick={handleEditType}>Edit</button>
        </div>
    )
}
