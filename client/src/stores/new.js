import { useState } from "react"
import { addStore } from "../managers/stores"
import { useNavigate } from "react-router-dom"
export const NewStore = ({ loggedInUser }) => {
    // hooks
    const navigate = useNavigate()
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
        addStore(copy).then(() => navigate("stores"))
    }
    // component return
    return (
        <form>
            <input className="border" name="city" onChange={handleStoreForm} placeholder="enter city..." type="text" />
            <input className="border" name="state" onChange={handleStoreForm} placeholder="enter state..." type="text" />
            <input className="border" name="street" onChange={handleStoreForm} placeholder="enter street..." type="text" />
            <input className="border" name="name" onChange={handleStoreForm} placeholder="enter name..." type="text" />
            <input className="border" name="zipcode" onChange={handleStoreForm} placeholder="enter zipcode..." type="number" />
            <button onClick={handleAddStore}>new store</button>
        </form>
    )
}