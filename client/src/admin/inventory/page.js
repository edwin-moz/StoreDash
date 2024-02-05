import { getDistributor, getDistributors } from "../../managers/distributors"
import { useEffect, useState } from "react"
import { deleteInventory, editInventory } from "../../managers/inventories"
import { AddInventory } from "./add"
export const Inventory = () => {
    // distributors
    // state
    const [distributors, setDistributors] = useState([])
    const [distributor, setDistributor] = useState({})
    const [inventory, setInventory] = useState({})
    // handle function to get distributors
    const handleGetDistributors = () => {
        getDistributors().then(setDistributors)
    }
    // handle function to get distributor with inventory
    const handleGetDistributor = (distributorId) => {
        getDistributor(distributorId).then((data) => {
            setDistributor(data)
            setInventory({ distributorId: data.id })
        })
    }
    // inventory
    // handle function to edit price
    const handleEditPrice = (event, inventoryId) => {
        const copy = { ...distributor }
        copy.inventories = copy.inventories.map((inventory) => {
            if (inventory.id === inventoryId) {
                inventory.price = event.target.value * 1
                return inventory
            }
            return inventory
        })
        setDistributor(copy)
    }
    // handle function to edit inventory
    const handleEditInventory = (inventory) => {
        editInventory(inventory).then(() => {
            getDistributor(inventory.distributorId).then(setDistributor)
        })
    }
    // handle function to delete inventory
    const handleDeleteInventory = (inventory) => {
        deleteInventory(inventory.id).then(() => {
            handleGetDistributor(inventory.distributorId)
        })
    }
    // use effect
    useEffect(() => {
        handleGetDistributors()
    }, [])
    return (
        <div className="flex flex-col max-h-[87vh] min-h-[87vh] overflow-y-scroll p-5">
            <div className="relative h-10 min-w-[200px] w-72">
                <select className="bg-white peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" name="productId" onChange={(event) => handleGetDistributor(event.target.value)}>
                    <option value={0}>Choose a distributor</option>
                    {distributors.map((distributor, index) => (
                        <option key={index} value={distributor.id}>{distributor.name}</option>
                    ))}
                </select>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Select a Type
                </label>
            </div>
            {distributor.id ? (
                <div className="grid grid-cols-[2fr,1fr] py-5">
                    {/* {distributor.id && ( */}
                    <ul className="gap-5 grid grid-cols-5 max-h-[70vh] overflow-scroll">
                        {distributor.inventories?.map((inventory, index) => (
                            <li className="bg-white border grid grid-rows-[1fr, 1fr, 1fr, 1fr, 1fr] gap-3 items-center text-center p-5 rounded-lg shadow-sm" key={index}>
                                <img className="border border-emerald-600 h-20 object-cover rounded-full items-center w-20" src={inventory.product.imageUrl} alt="" />
                                <p className="truncate">{inventory.product.name}</p>
                                <div className="w-[100px]">
                                    <div className="relative w-full min-w-[100px] h-10">
                                        <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t- focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" onChange={(event) => handleEditPrice(event, inventory.id)} placeholder=" " type="number" value={inventory.price} />
                                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                            Price
                                        </label>
                                    </div>
                                </div>
                                <button className="bg-emerald-700/20 border-2 hover:border-2 hover:border-emerald-600 rounded-lg self-stretch text-emerald-800 text-lg" onClick={() => handleEditInventory(inventory)}>Update</button>
                                <button className="bg-red-500/20 border-2 hover:border-2 hover:border-red-600 rounded-lg self-stretch text-lg text-red-800" onClick={() => handleDeleteInventory(inventory)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    {/* )} */}
                    <div>
                        <AddInventory handleGetDistributor={handleGetDistributor} inventory={inventory} setInventory={setInventory} />
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-[87vh]">
                    <p>Please choose a distributor</p>
                </div>
            )}
        </div>
    )
}