import { useState } from "react"
import { AddType, deleteType, editType } from "../../managers/types"
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
export const Types = ({ types, handleGetTypes }) => {
    // state
    const [type, setType] = useState("")
    const [typeToEdit, setTypeToEdit] = useState({})
    // handle function to add type
    const handleAddType = () => {
        AddType({ name: type }).then(() => {
            setType("")
            handleGetTypes()
        })
    }
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
            handleGetTypes()
        })
    }
    // handle function to delete type
    const handleDeleteType = (typeId) => {
        deleteType(typeId).then(() => {
            handleGetTypes()
        })
    }
    return (
        <div className="gap-5 grid grid-cols-[1fr,2fr] grid-rows-[1fr,1fr] h-[30rem] p-10">
            <div className="border grid grid-cols-3 p-5 rounded-lg row-start-1 row-span-2 text-center">
                <p>Id</p>
                <p className="text-start">Name</p>
                <p>Edit</p>
                <p>Delete</p>
                <ul className="col-span-4 grid grid-cols-subgrid h-full overflow-y-scroll">
                    {types.map((type, index) => (
                        <li className="col-span-4 grid grid-cols-subgrid" key={index}>
                            <p className="col-start-1">{type.id}</p>
                            <p className="col-start-2 text-start">{type.name}</p>
                            <div className="col-start-3">
                                <button onClick={() => setTypeToEdit(type)}>
                                    <FaRegEdit />
                                </button>
                            </div>
                            <div className="col-start-4">
                                <button className="text-xl" onClick={() => handleDeleteType(type.id)}>
                                    <AiOutlineDelete />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border flex flex-col gap-5 p-5 rounded-lg">
                <div className="flex flex-wrap justify-between">
                    <p>Add</p>
                    <button className="bg-gray-500 h-10 mb-5 px-3 rounded-full shadow-md text-white" onClick={() => setType("")}>Clear</button>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <label>Name</label>
                    <input className="border flex flex-grow h-10 rounded-lg text-center" onChange={(event) => setType(event.target.value)} placeholder="Enter a name" type="text" value={type || ""} />
                </div>
                <button className="bg-emerald-600 h-[3rem] rounded-full shadow-md text-2xl text-white" onClick={handleAddType}>Add</button>
            </div>
            <div className="border flex flex-col gap-5 p-5 rounded-lg">
                <div className="flex flex-wrap justify-between">
                    <p>Edit</p>
                    <button className="bg-gray-500 h-10 mb-5 px-3 rounded-full shadow-md text-white" onClick={() => setTypeToEdit({})}>Clear</button>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <label>Name</label>
                    <input className="border flex flex-grow h-10 rounded-lg text-center" name="name" onChange={handleEditTypeForm} placeholder="Enter a name" type="text" value={typeToEdit.name || ""} />
                </div>
                <button className="bg-emerald-600 h-[3rem] rounded-full shadow-md text-2xl text-white" onClick={handleEditType}>Edit</button>
            </div>
        </div>
    )
}