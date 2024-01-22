import { useEffect, useState } from "react"
import { editStore } from "../managers/stores"
export const EditStore = ({ chosenStore, handleGetStores }) => {
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
        editStore(store).then(() => handleGetStores())
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
        <form className="border">
            <div>
                <p>edit store</p>
            </div>
            <div>
                <p>city: *</p>
                <input className="border" defaultValue={store.city} name="city" onChange={handleStoreForm} placeholder="enter city..." type="text" />
            </div>
            <div>
                <p>state: *</p>
                <input className="border" defaultValue={store.state} name="state" onChange={handleStoreForm} placeholder="enter state..." type="text" />
            </div>
            <div>
                <p>street: *</p>
                <input className="border" defaultValue={store.street} name="street" onChange={handleStoreForm} placeholder="enter street..." type="text" />
            </div>
            <div>
                <p>name: *</p>
                <input className="border" defaultValue={store.name} name="name" onChange={handleStoreForm} placeholder="enter name..." type="text" />
            </div>
            <div>
                <p>zipcode: *</p>
                <input className="border" defaultValue={store.zipcode} name="zipcode" onChange={handleStoreForm} placeholder="enter zipcode..." type="number" />
            </div>
            <div>
                <button onClick={handleEditStore}>new store</button>
            </div>
        </form>
    )
}