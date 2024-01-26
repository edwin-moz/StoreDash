import { useEffect, useState } from "react"
import { editStore } from "../managers/stores"
export const EditStore = ({ chosenStore, handleGetStores, setDisplayEditStore }) => {
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
    // handle function to edit store
    const handleEditStore = () => {
        editStore(store).then(() => {
            handleGetStores()
            setDisplayEditStore(false)
        })
    }
    // handle function to set the chosen store
    const handleSetChosenStore = () => {
        const copy = { ...store }
        copy.id = chosenStore.id
        copy.city = chosenStore.city
        copy.state = chosenStore.state
        copy.street = chosenStore.street
        copy.userId = chosenStore.userId
        copy.name = chosenStore.name
        copy.zipcode = chosenStore.zipcode
        setStore(copy)
    }
    useEffect(() => {
        handleSetChosenStore()
    }, [chosenStore])
    // component return
    return (
        <div className="flex justify-center right-10">
            <form className="border bg-white flex flex-col gap-3 items-center p-5 rounded-lg w-full">
                <div className="py-3">
                    <p className="text-2xl">edit store</p>
                </div>
                <div>
                    <p>City: *</p>
                    <input className="border h-8 rounded-md text-center w-56" defaultValue={store.city} name="city" onChange={handleStoreForm} placeholder="Enter a city..." type="text" />
                </div>
                <div>
                    <p>State: *</p>
                    <input className="border h-8 rounded-md text-center w-56" defaultValue={store.state} name="state" onChange={handleStoreForm} placeholder="Enter a state..." type="text" />
                </div>
                <div>
                    <p>Street: *</p>
                    <input className="border h-8 rounded-md text-center w-56" defaultValue={store.street} name="street" onChange={handleStoreForm} placeholder="Enter a street..." type="text" />
                </div>
                <div>
                    <p>Name: *</p>
                    <input className="border h-8 rounded-md text-center w-56" defaultValue={store.name} name="name" onChange={handleStoreForm} placeholder="Enter a store name..." type="text" />
                </div>
                <div>
                    <p>Zipcode: *</p>
                    <input className="border h-8 rounded-md text-center w-56" defaultValue={store.zipcode} name="zipcode" onChange={handleStoreForm} placeholder="Enter a zipcode..." type="number" />
                </div>
                <div className="flex justify-between w-full">
                    <div>
                        <button className="bg-gray-300 px-3 py-1 rounded-md" onClick={() => setDisplayEditStore(false)}>Cancel</button>
                    </div>
                    <div>
                        <button className="bg-emerald-600 px-3 py-1 rounded-md text-gray-100" onClick={handleEditStore}>Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}