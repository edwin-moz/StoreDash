import { AddType } from "../../managers/types"

export const AddProduct = ({ type, setType, handleGetTypes }) => {
    // handle function for addTypeForm
    const handleAddTypeForm = (event) => {
        setType(event.target.value)
    }
    // handle function to add type
    const handleAddType = () => {
        AddType({ name: type }).then(() => {
            setType("")
            handleGetTypes()
        })
    }
    return (
        <div className="bg-white border flex flex-col gap-5 p-5 rounded-lg shadow">
            <div className="flex flex-wrap justify-between mb-3">
                <p className="font-semibold text-xl">Add type</p>
                <button className="border border-emerald-600 h-[2rem] hover:bg-emerald-700/20 px-5 rounded-full text-emerald-800 transition" onClick={() => setType("")}>Clear fields</button>
            </div>
            <div className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <input className="input-layout peer" name="name" onChange={handleAddTypeForm} required type="text" value={type || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Name</label>
                </div>
            </div>
            <button className="button-primary text-2xl" onClick={handleAddType}>Add</button>
        </div>
    )
}