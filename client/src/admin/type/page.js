import { useState } from "react"
import { deleteType } from "../../managers/types"
import { AddProduct } from "./add";
import { EditProduct } from "./edit";
export const Types = ({ types, handleGetTypes }) => {
    // state
    const [type, setType] = useState("")
    const [typeToEdit, setTypeToEdit] = useState({})
    const [displayAddTypeForm, setDisplayAddTypeForm] = useState(false)
    const [displayEditTypeForm, setDisplayEditTypeForm] = useState(false)
    // handle function to delete type
    const handleDeleteType = (typeId) => {
        deleteType(typeId).then(() => {
            handleGetTypes()
        })
    }
    // handle display add type form
    const handleDisplayAddTypeForm = () => {
        setDisplayEditTypeForm(false)
        setDisplayAddTypeForm(true)
    }
    return (
        <div className="gap-5 grid md:grid-cols-[2fr,1fr]">
            <ul className={`gap-3 md:flex flex-col ${displayAddTypeForm || displayEditTypeForm ? "hidden" : "flex"} max-h-[80vh] min-h-[80vh] overflow-y-scroll`}>
                {types.map((type, index) => (
                    <li className="gap-3 grid grid-cols-[2fr,1fr,1fr] max-h-[10rem]" key={index}>
                        <div className="bg-white flex items-center justify-center p-5 rounded-lg shadow">
                            <p className="font-medium text-xl">{type.name}</p>
                        </div>
                        <button className="bg-emerald-700/20 hover:border-2 hover:border-emerald-600 rounded-lg self-stretch text-emerald-800 text-xl" onClick={() => {
                            setDisplayEditTypeForm(true)
                            setTypeToEdit(type)
                        }}>
                            Edit
                        </button>
                        <button className="bg-red-500/20 hover:border-2 hover:border-red-600 rounded-lg self-stretch text-xl text-red-800" onClick={() => handleDeleteType(type.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <div className="gap-5 grid">
                <AddProduct displayAddTypeForm={displayAddTypeForm} setDisplayAddTypeForm={setDisplayAddTypeForm} type={type} setType={setType} handleGetTypes={handleGetTypes} />
                <EditProduct displayEditTypeForm={displayEditTypeForm} setDisplayEditTypeForm={setDisplayEditTypeForm} handleGetTypes={handleGetTypes} typeToEdit={typeToEdit} setTypeToEdit={setTypeToEdit} />
            </div>
            <div className="bottom-28 fixed md:hidden right-5">
                <button className={`bg-emerald-700 ${displayAddTypeForm ? "hidden" : "block"} px-3 py-2 rounded-full shadow-black/50 shadow-xl text-white w-24`} onClick={handleDisplayAddTypeForm}>Add</button>
            </div>
        </div>
    )
}