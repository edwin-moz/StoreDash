import AdminFormHeading from "../../components/admin-form-heading"
import Input from "../../components/input"
import { useDistributorContext } from "../../lib/hooks"

export const AddDistributor = ({ displayAddDistributorForm, setDisplayAddDistributorForm }) => {
    const { distributorToAdd, handleAddDistributorToDatabase, handleSetDistributorToAdd } = useDistributorContext()
    // handle add distributor form
    const handleAddDistributorForm = (event) => {
        const copy = { ...distributorToAdd }
        const { name, value } = event.target
        if (name === "name") {
            copy.name = value
        } else if (name === "street") {
            copy.street = value
        } else if (name === "city") {
            copy.city = value
        } else if (name === "state") {
            copy.state = value
        } else if (name === "zipcode") {
            copy.zipcode = value * 1
        }

        handleSetDistributorToAdd(copy)
        setDistributor(copy)
    }
    // handle function to cancel display add distributor form
    const handleCancelDisplayAddDistributorForm = () => {
        setDisplayAddDistributorForm(false)
    }
    return (
        <div className={`md:bg-white md:border md:flex flex-col ${displayAddDistributorForm ? "flex" : "hidden"} p-5 md:rounded-lg`}>
            <div className="flex flex-wrap justify-between mb-3">
                <AdminFormHeading
                    formTitle="Add a distributor"
                    onClick={() => setDistributor({})}
                />
            </div>

            <div className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <Input
                        inputName="name"
                        inputStyle="inline"
                        inputType="text"
                        onChange={handleAddDistributorForm}
                        value={distributorToAdd.name || ""}
                    >
                        * Name
                    </Input>
                </div>

                <div className="relative">
                    <Input
                        inputName="street"
                        inputStyle="inline"
                        inputType="text"
                        onChange={handleAddDistributorForm}
                        required
                        value={distributorToAdd.street || ""}
                    >
                        * Street
                    </Input>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative">
                        <Input
                            inputName="city"
                            inputStyle="inline"
                            inputType="text"
                            onChange={handleAddDistributorForm}
                            required
                            value={distributorToAdd.city || ""}
                        >
                            * City
                        </Input>
                    </div>

                    <div className="relative">
                        <Input
                            inputName="state"
                            inputStyle="inline"
                            inputType="text"
                            onChange={handleAddDistributorForm}
                            required
                            value={distributorToAdd.state || ""}
                        >
                            * State
                        </Input>
                    </div>

                    <div className="relative">
                        <Input
                            inputName="zipcode"
                            inputStyle="inline"
                            inputType="number"
                            onChange={handleAddDistributorForm}
                            required
                            value={distributorToAdd.zipcode || ""}
                        >
                            * Zipcode
                        </Input>
                    </div>
                </div>

                <button className="button-secondary md:hidden text-2xl" onClick={handleCancelDisplayAddDistributorForm}>Cancel</button>

                <button className="button-primary text-2xl" onClick={handleAddDistributorToDatabase}>Add</button>
            </div>
        </div>
    )
}
