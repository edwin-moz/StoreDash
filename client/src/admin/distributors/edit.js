import { editDistributor } from "../../managers/distributors"

export const EditDistributor = ({ distributorToEdit, setDistributorToEdit, handleGetDistributors }) => {
    // handle function for edit distributor form
    const handleEditDistributorForm = (event) => {
        const copy = { ...distributorToEdit }
        const { name, value } = event.target
        if (name === "name") {
            copy.name = value
        } else if (name === "active") {
            copy.active = !copy.active
        } else if (name === "street") {
            copy.street = value
        } else if (name === "city") {
            copy.city = value
        } else if (name === "state") {
            copy.state = value
        } else if (name === "zipcode") {
            copy.zipcode = value * 1
        }
        setDistributorToEdit(copy)
    }
    // handle function to add a distributor
    const handleEditDistributor = () => {
        editDistributor(distributorToEdit).then(() => {
            handleGetDistributors()
        })
    }
    return (
        <div className="bg-white border flex flex-col hidden p-5 rounded-lg">
            <div className="flex flex-wrap justify-between mb-3">
                <p className="font-semibold text-xl">Edit</p>
                <button className="border border-emerald-600 h-[2rem] hover:bg-emerald-700/20 px-5 rounded-full text-emerald-800 transition" onClick={() => setDistributorToEdit({})}>Clear fields</button>
            </div>
            <div className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <input className="input-layout peer" name="name" onChange={handleEditDistributorForm} required type="text" value={distributorToEdit.name || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Name</label>
                </div>
                <div className="flex gap-3">
                    <input checked={distributorToEdit.active} name="active" onChange={handleEditDistributorForm} placeholder="Enter a name" type="checkbox" />
                    <label className="text-gray-500">Active?</label>
                </div>
                <div className="relative">
                    <input className="input-layout peer w-full" name="street" onChange={handleEditDistributorForm} required type="text" value={distributorToEdit.street || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Street</label>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <input className="input-layout peer w-full" name="city" onChange={handleEditDistributorForm} required type="text" value={distributorToEdit.city || ""} />
                        <label className="label-layout peer-focus:text-gray-950">* City</label>
                    </div>
                    <div className="relative">
                        <input className="input-layout peer w-full" name="state" onChange={handleEditDistributorForm} required type="text" value={distributorToEdit.state || ""} />
                        <label className="label-layout peer-focus:text-gray-950">* State</label>
                    </div>
                    <div className="relative">
                        <input className="input-layout peer w-full" name="zipcode" onChange={handleEditDistributorForm} required type="number" value={distributorToEdit.zipcode || ""} />
                        <label className="label-layout peer-focus:text-gray-950">* Zipcode</label>
                    </div>
                </div>
                <button className="button-primary text-2xl" onClick={handleEditDistributor}>Edit</button>
            </div>
        </div>
    )
}