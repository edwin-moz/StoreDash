import AdminFormHeading from "../../components/admin-form-heading"
import Input from "../../components/input"
import { editDistributor } from "../../managers/distributors"

export const EditDistributor = ({ distributorToEdit, setDistributorToEdit, displayEditDistributorForm, setDisplayEditDistributorForm, handleGetDistributors }) => {
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
    // handle function to cancel display edit distributor form
    const handleCancelDisplayEditDistributorForm = () => {
        setDisplayEditDistributorForm(false)
    }
    return (
        <div className={`md:bg-white md:border md:flex flex-col ${displayEditDistributorForm ? "flex" : "hidden"} p-5 md:rounded-lg`}>
            <div className="flex flex-wrap justify-between mb-3">
                <AdminFormHeading formTitle="Edit a distributor" onClick={() => setDistributorToEdit({})} />
            </div>

            <div className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <Input inputName="name" inputStyle="inline" inputType="text" onChange={handleEditDistributorForm} required value={distributorToEdit.name || ""}>* Name</Input>
                </div>
                <div className="flex gap-3">
                    <input checked={distributorToEdit.active} name="active" onChange={handleEditDistributorForm} placeholder="Enter a name" type="checkbox" />
                    <label className="text-gray-500">Active?</label>
                </div>
                <div className="relative">
                    <Input inputName="street" inputStyle="inline" inputType="text" onChange={handleEditDistributorForm} required value={distributorToEdit.street || ""}>
                        * Street
                    </Input>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative">
                        <Input inputName="city" inputStyle="inline" inputType="text" onChange={handleEditDistributorForm} required value={distributorToEdit.city || ""}>
                            * City
                        </Input>
                    </div>
                    <div className="relative">
                        <Input inputName="state" inputStyle="inline" inputType="text" onChange={handleEditDistributorForm} required value={distributorToEdit.state || ""}>
                            * State
                        </Input>
                    </div>
                    <div className="relative">
                        <Input inputName="zipcode" inputStyle="inline" inputType="number" onChange={handleEditDistributorForm} required value={distributorToEdit.zipcode || ""}>
                            * Zipcode
                        </Input>
                    </div>
                </div>
                <button className="button-secondary md:hidden text-2xl" onClick={handleCancelDisplayEditDistributorForm}>Cancel</button>
                <button className="button-primary text-2xl" onClick={handleEditDistributor}>Edit</button>
            </div>
        </div>
    )
}
