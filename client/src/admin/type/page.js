import { useState } from "react"
import { AddType, deleteType, editType } from "../../managers/types"
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { AddProduct } from "./add";
import { EditProduct } from "./edit";
export const Types = ({ types, handleGetTypes }) => {
    // state
    const [type, setType] = useState("")
    const [typeToEdit, setTypeToEdit] = useState({})
    // handle function to delete type
    const handleDeleteType = (typeId) => {
        deleteType(typeId).then(() => {
            handleGetTypes()
        })
    }
    return (
        <div className="gap-5 grid grid-cols-[2fr,1fr] m-10">
            <div className="flex flex-col flex-wrap overflow-hidden rounded-lg">
                <ul className="col-span-3 gap-3 grid grid-cols-[2fr,1fr,1fr] h-[28rem] overflow-y-scroll">
                    {types.map((type, index) => (
                        <li className="col-span-3 grid grid-cols-subgrid" key={index}>
                            <div className="bg-white flex items-center justify-center p-5 rounded-lg shadow-sm">
                                <p className="font-medium text-xl">{type.name}</p>
                            </div>
                            <button className="bg-emerald-600/20 hover:border-2 hover:border-emerald-600 rounded-lg self-stretch text-emerald-800 text-xl" onClick={() => setTypeToEdit(type)}>
                                Edit
                            </button>
                            <button className="bg-red-500/20 hover:border-2 hover:border-red-600 rounded-lg self-stretch text-xl text-red-800" onClick={() => handleDeleteType(type.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="gap-5 grid">
                <AddProduct type={type} setType={setType} handleGetTypes={handleGetTypes} />
                <EditProduct handleGetTypes={handleGetTypes} typeToEdit={typeToEdit} setTypeToEdit={setTypeToEdit} />
            </div>
        </div>
    )
}