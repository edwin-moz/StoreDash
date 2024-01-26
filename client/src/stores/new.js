import { useState } from "react"
import { addStore } from "../managers/stores"
export const NewStore = ({ loggedInUser, handleGetStores, setDisplayAddStore }) => {
    // state
    const [store, setStore] = useState({})
    // handle function for the store form
    const handleStoreForm = (event) => {
        const name = event.target.name
        const value = event.target.value
        const copy = { ...store }
        if (name === "city") {
            copy.city = value
            setStore(copy)
        } else if (name === "state") {
            copy.state = value
            setStore(copy)
        } else if (name === "street") {
            copy.street = value
            setStore(copy)
        } else if (name === "name") {
            copy.name = value
            setStore(copy)
        } else if (name === "zipcode") {
            copy.zipcode = value * 1
            setStore(copy)
        }
    }
    // handle function to add store
    const handleAddStore = () => {
        const copy = { ...store }
        copy.userId = loggedInUser.id
        addStore(copy).then(() => {
            handleGetStores()
            setDisplayAddStore(false)
        })
    }
    // component return
    return (
        <div className="flex justify-center right-0">
            <form className="border-l border-y bg-white flex flex-col gap-3 items-center p-5 rounded-lg w-full">
                <div className="py-3">
                    <p className="text-2xl">Add a new store</p>
                </div>
                <div>
                    <p>City: *</p>
                    <input className="border h-8 rounded-md text-center w-56" name="city" onChange={handleStoreForm} placeholder="Enter a city..." required type="text" />
                </div>
                <div>
                    <p>State: *</p>
                    <input className="border h-8 rounded-md text-center w-56" name="state" onChange={handleStoreForm} placeholder="Enter a state..." type="text" />
                </div>
                <div>
                    <p>Street: *</p>
                    <input className="border h-8 rounded-md text-center w-56" name="street" onChange={handleStoreForm} placeholder="Enter a street..." type="text" />
                </div>
                <div>
                    <p>Name: *</p>
                    <input className="border h-8 rounded-md text-center w-56" name="name" onChange={handleStoreForm} placeholder="Enter the store name..." type="text" />
                </div>
                <div>
                    <p>Zipcode: *</p>
                    <input className="border h-8 rounded-md text-center w-56" name="zipcode" onChange={handleStoreForm} placeholder="Enter a zipcode..." type="number" />
                </div>
                <div className="flex justify-between w-full">
                    <div>
                        <button className="bg-gray-300 px-3 py-1 rounded-md" onClick={() => setDisplayAddStore(false)}>Cancel</button>
                    </div>
                    <div>
                        <button className="bg-emerald-600 px-3 py-1 rounded-md text-gray-100" onClick={handleAddStore}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}