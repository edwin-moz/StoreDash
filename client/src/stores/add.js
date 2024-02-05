import { useState } from "react"
import { addStore } from "../managers/stores"
import { motion } from "framer-motion"
export const AddStore = ({ loggedInUser, handleGetStores, setDisplayAddStore }) => {
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
        <motion.form animate={{ x: 0 }} initial={{ x: 400 }} className="border bg-white flex-col hidden gap-3 md:flex p-5 rounded-lg">
            <p><span className="text-emerald-600">*</span> indicates required field</p>
            <div className="relative">
                <input className="input-layout peer" name="name" onChange={handleStoreForm} type="text" value={store.name || ""} />
                <label className="label-layout peer-focus:text-gray-950">* Name</label>
            </div>
            <div className="relative">
                <input className="input-layout peer w-full" name="street" onChange={handleStoreForm} type="text" value={store.street || ""} />
                <label className="label-layout peer-focus:text-gray-950">* Street</label>
            </div>
            <div className="flex gap-3">
                <div className="relative">
                    <input className="input-layout peer w-full" name="city" onChange={handleStoreForm} type="text" value={store.city || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* City</label>
                </div>
                <div className="relative">
                    <input className="input-layout peer w-full" name="state" onChange={handleStoreForm} type="text" value={store.state || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* State</label>
                </div>
                <div className="relative">
                    <input className="input-layout peer w-full" name="zipcode" onChange={handleStoreForm} type="number" value={store.zipcode || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Zipcode</label>
                </div>
            </div>
            <div className="flex gap-3 w-full">
                <button className="button-secondary w-full" onClick={() => setDisplayAddStore(false)}>Cancel</button>
                <button className="button-primary w-full" onClick={handleAddStore}>Submit</button>
            </div>
        </motion.form>
    )
}