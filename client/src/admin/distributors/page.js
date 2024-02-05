import { useEffect, useState } from "react"
import { deleteDistributor, getDistributors } from "../../managers/distributors"
import { AddDistributor } from "./add";
import { EditDistributor } from "./edit";
export const Distributors = () => {
    // state
    const [distributors, setDistributors] = useState([])
    const [distributor, setDistributor] = useState({})
    const [distributorToEdit, setDistributorToEdit] = useState({})
    // handle functio to get distributors
    const handleGetDistributors = () => {
        getDistributors().then(setDistributors)
    }
    // handle function for edit distributor form
    // handle function to delete a distributor
    const handleDeleteDistributor = (distributorId) => {
        deleteDistributor(distributorId).then(() => {
            handleGetDistributors()
        })
    }
    // use effect
    useEffect(() => {
        handleGetDistributors()
    }, [])
    return (
        <div className="gap-5 grid grid-cols-2">
            <ul className="flex flex-col gap-3 min-h-[80vh] max-h-[80vh] overflow-y-scroll">
                {distributors.map((distributor, index) => (
                    <li className="gap-3 grid grid-cols-[2fr,1fr,1fr,1fr] items-center" key={index}>
                        <div className="bg-white border col-span-2 grid grid-cols-2 max-h-[10rem] p-5 rounded-lg shadow">
                            <div className="flex flex-col">
                                <p className="text-blue-500 truncate">{distributor.name}</p>
                                <p>{distributor.active ? "Active" : "Unactive"}</p>
                            </div>
                            <div>
                                <p className="truncate">{distributor.street}</p>
                                <div className="flex flex-wrap">
                                    <p></p>
                                    <p>{distributor.city}, {distributor.state} {distributor.zipcode}</p>
                                </div>
                            </div>
                        </div>
                        <button className="bg-emerald-700/20 hover:border-2 hover:border-emerald-600 rounded-lg self-stretch text-emerald-800 text-xl" onClick={() => setDistributorToEdit(distributor)}>
                            Edit
                        </button>
                        <button className="bg-red-500/20 hover:border-2 hover:border-red-600 rounded-lg self-stretch text-xl text-red-800" onClick={() => handleDeleteDistributor(distributor.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <div className="gap-5 grid">
                <AddDistributor distributor={distributor} setDistributor={setDistributor} handleGetDistributors={handleGetDistributors} />
                <EditDistributor distributorToEdit={distributorToEdit} setDistributorToEdit={setDistributorToEdit} handleGetDistributors={handleGetDistributors} />
            </div>
        </div>
    )
}