import { useState } from "react"
import { useDistributorContext } from "../../lib/hooks";
import { AddDistributor } from "./add";
import { EditDistributor } from "./edit";
export const Distributors = () => {
    // hooks
    const { distributors, handleDeleteDistributor, handleGetAndSetDistributors } = useDistributorContext()
    // state
    const [distributor, setDistributor] = useState({})
    const [distributorToEdit, setDistributorToEdit] = useState({})
    const [displayAddDistributorForm, setDisplayAddDistributorForm] = useState(false)
    const [displayEditDistributorForm, setDisplayEditDistributorForm] = useState(false)
    // handle function to display add distributor form
    const handleDisplayAddDistributorForm = () => {
        setDisplayEditDistributorForm(false)
        setDisplayAddDistributorForm(true)
    }
    return (
        <div className="gap-5 grid md:grid-cols-[2fr,1fr]">
            <ul className={`md:flex flex-col gap-3 ${displayAddDistributorForm || displayEditDistributorForm ? "hidden" : "flex"} min-h-[80vh] max-h-[80vh] overflow-y-scroll`}>
                {distributors.map((distributor, index) => (
                    <li className="gap-3 grid grid-cols-[2fr,1fr,1fr,1fr] items-center" key={index}>
                        <div className="bg-white border col-span-2 grid grid-rows-2 max-h-[10rem] p-5 rounded-lg shadow">
                            <div className="flex flex-col justify-between md:flex-row">
                                <p className="text-blue-500 truncate">{distributor.name}</p>
                                <p>{distributor.active ? "Active" : "Inactive"}</p>
                            </div>
                            <div>
                                <p className="truncate">{distributor.street}</p>
                                <div className="flex flex-wrap">
                                    <p>{distributor.city}, {distributor.state} {distributor.zipcode}</p>
                                </div>
                            </div>
                        </div>
                        <button className="bg-emerald-700/20 hover:border-2 hover:border-emerald-600 rounded-lg self-stretch text-emerald-800 text-xl" onClick={() => {
                            setDisplayEditDistributorForm(true)
                            setDistributorToEdit(distributor)
                        }}>
                            Edit
                        </button>
                        <button className="bg-red-500/20 hover:border-2 hover:border-red-600 rounded-lg self-stretch text-xl text-red-800" onClick={() => handleDeleteDistributor(distributor.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <div className="gap-5 grid">
                <AddDistributor
                    distributor={distributor}
                    setDistributor={setDistributor}
                    displayAddDistributorForm={displayAddDistributorForm}
                    setDisplayAddDistributorForm={setDisplayAddDistributorForm}
                    handleGetDistributors={handleGetAndSetDistributors}
                />
                <EditDistributor
                    distributorToEdit={distributorToEdit}
                    setDistributorToEdit={setDistributorToEdit}
                    displayEditDistributorForm={displayEditDistributorForm}
                    setDisplayEditDistributorForm={setDisplayEditDistributorForm}
                    handleGetDistributors={handleGetAndSetDistributors}
                />
            </div>
            <div className="bottom-28 fixed md:hidden right-5">
                <button className={`bg-emerald-700 ${'displayAddTypeForm ? "hidden" : "block"'} px-3 py-2 rounded-full shadow-black/50 shadow-xl text-white w-24`} onClick={handleDisplayAddDistributorForm}>Add</button>
            </div>
        </div>
    )
}
