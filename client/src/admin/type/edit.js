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
            handleGetTypes()
        })
    }
    return (
        <div className="bg-white border flex flex-col gap-5 p-5 rounded-lg">
            <div className="flex flex-wrap justify-between mb-3">
                <p className="font-semibold text-xl">Edit</p>
                <button className="border border-emerald-600 h-[2rem] hover:bg-emerald-600/20 px-5 rounded-full text-emerald-800 transition" onClick={() => setTypeToEdit({})}>Clear fields</button>
            </div>
            <div className="flex flex-col justify-center gap-y-3">
                <div className="w-72">
                    <div className="relative w-full min-w-[200px] h-10">
                        <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t- focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" name="name" onChange={handleEditTypeForm} placeholder=" " type="text" value={typeToEdit.name || ""} />
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                            Name
                        </label>
                    </div>
                </div>
            </div>
            <button className="bg-emerald-600 h-[3rem] rounded-full shadow-md text-2xl text-white" onClick={handleEditType}>Edit</button>
        </div>
    )
}