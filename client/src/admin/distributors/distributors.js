import { useEffect, useState } from "react"
import { addDistributor, deleteDistributor, editDistributor, getDistributors } from "../../managers/distributors"
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
export const Distributors = () => {
    // state
    const [distributors, setDistributors] = useState([])
    const [distributor, setDistributor] = useState({})
    const [distributorToEdit, setDistributorToEdit] = useState({})
    // handle functio to get distributors
    const handleGetDistributors = () => {
        getDistributors().then(setDistributors)
    }
    // handle add distributor form
    const handleAddDistributorForm = (event) => {
        const copy = { ...distributor }
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
        setDistributor(copy)
    }
    // handle function to add distributor
    const handleAddDistributor = () => {
        addDistributor(distributor).then(() => {
            handleGetDistributors()
        })
    }
    // handle function for edit distributor form
    // handle function to delete a distributor
    const handleDeleteDistributor = (distributorId) => {
        deleteDistributor(distributorId).then(() => {
            handleGetDistributors()
        })
    }
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
    // use effect
    useEffect(() => {
        handleGetDistributors()
    }, [])
    return (
        <div className="gap-5 grid grid-cols-2 grid-rows-2 mt-5 mx-10">
            <div className="grid grid-cols-subgrid row-start-1 row-span-2">
                <div className="grid grid-cols-[1fr,2fr,2fr,1fr,2fr,1fr,1fr,1fr] rounded-lg">
                    <p>Active</p>
                    <p>City</p>
                    <p>Name</p>
                    <p>State</p>
                    <p>Street</p>
                    <p>Zipcode</p>
                    <ul className="col-span-9 grid grid-cols-subgrid h-[30rem] overflow-y-scroll">
                        {distributors.map((distributor, index) => (
                            <li className="col-span-9 grid grid-cols-subgrid" key={index}>
                                <p>{distributor.active ? "Active" : "Unactive"}</p>
                                <p>{distributor.city}</p>
                                <p className="truncate">{distributor.name}</p>
                                <p>{distributor.state}</p>
                                <p className="truncate">{distributor.street}</p>
                                <p>{distributor.zipcode}</p>
                                <div>
                                    <button onClick={() => setDistributorToEdit(distributor)}>
                                        <FaRegEdit />
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => handleDeleteDistributor(distributor.id)}>
                                        <AiOutlineDelete />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="border flex flex-col gap-5 p-5 rounded-lg">
                <div className="flex flex-wrap justify-between">
                    <p>Add</p>
                    <button className="bg-gray-500 mb-5 px-3 rounded-full text-white" onClick={() => setDistributor({})}>Clear</button>
                </div>
                <div className="flex flex-wrap gap-5">
                    <label>Name</label>
                    <input className="border rounded-lg text-center" name="name" onChange={handleAddDistributorForm} placeholder="Enter a name" type="text" value={distributor.name || ""} />
                </div>
                <div className="flex flwx-wrap gap-5">
                    <label>Street</label>
                    <input className="border flex flex-grow rounded-lg text-center" name="street" onChange={handleAddDistributorForm} placeholder="Enter a street" type="text" value={distributor.street || ""} />
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col">
                        <label>City</label>
                        <input className="border rounded-lg text-center" name="city" onChange={handleAddDistributorForm} placeholder="Enter a city" type="text" value={distributor.city || ""} />
                    </div>
                    <div className="flex flex-col">
                        <label>State</label>
                        <input className="border rounded-lg text-center" name="state" onChange={handleAddDistributorForm} placeholder="Enter a State" type="text" value={distributor.state || ""} />
                    </div>
                    <div className="flex flex-col">
                        <label>Zipcode</label>
                        <input className="border rounded-lg text-center" name="zipcode" onChange={handleAddDistributorForm} placeholder="Enter a zipcode" type="number" value={distributor.zipcode || 0} />
                    </div>
                </div>
                <button className="bg-emerald-600 h-[3rem] rounded-full shadow-md text-2xl text-white" onClick={handleAddDistributor}>Add</button>
            </div>
            <div className="border flex flex-col gap-5 p-5 rounded-lg">
                <div className="flex flex-wrap justify-between">
                    <p>Add</p>
                    <button className="bg-gray-500 mb-5 px-3 rounded-full text-white" onClick={() => setDistributorToEdit({})}>Clear</button>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-wrap gap-5">
                        <label>Name</label>
                        <input className="border rounded-lg text-center" name="name" onChange={handleEditDistributorForm} placeholder="Enter a name" type="text" value={distributorToEdit.name || ""} />
                    </div>
                    <div className="flex flex-wrap gap-5">
                        <label>Active</label>
                        <input checked={distributorToEdit.active} name="active" onChange={handleEditDistributorForm} placeholder="Enter a name" type="checkbox" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-5">
                    <label>Street</label>
                    <input className="border flex flex-grow rounded-lg text-center" name="street" onChange={handleEditDistributorForm} placeholder="Enter a street" type="text" value={distributorToEdit.street || ""} />
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col">
                        <label>City</label>
                        <input className="border rounded-lg text-center" name="city" onChange={handleEditDistributorForm} placeholder="Enter a city" type="text" value={distributorToEdit.city || ""} />
                    </div>
                    <div className="flex flex-col">
                        <label>State</label>
                        <input className="border rounded-lg text-center" name="state" onChange={handleEditDistributorForm} placeholder="Enter a State" type="text" value={distributorToEdit.state || ""} />
                    </div>
                    <div className="flex flex-col">
                        <label>Zipcode</label>
                        <input className="border rounded-lg text-center" name="zipcode" onChange={handleEditDistributorForm} placeholder="Enter a zipcode" type="number" value={distributorToEdit.zipcode || 0} />
                    </div>
                </div>
                <button className="bg-emerald-600 h-[3rem] rounded-full shadow-md text-2xl text-white" onClick={handleEditDistributor}>Add</button>
            </div>
        </div>
    )
}