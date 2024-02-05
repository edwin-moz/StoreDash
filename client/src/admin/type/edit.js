import { editType } from "../../managers/types"

export const EditProduct = ({ handleGetTypes, typeToEdit, setTypeToEdit }) => {
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
    return (
        <div className="bg-white border flex flex-col gap-5 p-5 rounded-lg">
            <div className="flex flex-wrap justify-between mb-3">
                <p className="font-semibold text-xl">Edit</p>
                <button className="border border-emerald-600 h-[2rem] hover:bg-emerald-700/20 px-5 rounded-full text-emerald-800 transition" onClick={() => setTypeToEdit({})}>Clear fields</button>
            </div>
            <div className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <input className="input-layout peer" name="name" onChange={handleEditTypeForm} required type="text" value={typeToEdit.name || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Name</label>
                </div>
            </div>
            <button className="active:scale-95 active:translate-y-1 bg-emerald-700 h-[3rem] rounded-full shadow-md text-2xl text-white transition" onClick={handleEditType}>Edit</button>
        </div>
    )
}