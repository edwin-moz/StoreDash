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
    const handleAddStore = (event) => {
        event.preventDefault()
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
                <input className="input-layout peer" id="store-name" name="name" onChange={handleStoreForm} type="text" value={store.name || ""} />
                <label className="label-layout peer-focus:text-gray-950" htmlFor="store-name">* Name</label>
            </div>
            <div className="relative">
                <input className="input-layout peer w-full" id="street" name="street" onChange={handleStoreForm} type="text" value={store.street || ""} />
                <label className="label-layout peer-focus:text-gray-950" htmlFor="street">* Street</label>
            </div>
            <div className="flex gap-3">
                <div className="relative">
                    <input className="input-layout peer w-full" id="city" name="city" onChange={handleStoreForm} type="text" value={store.city || ""} />
                    <label className="label-layout peer-focus:text-gray-950" htmlFor="city">* City</label>
                </div>
                <div className="relative">
                    <input className="input-layout peer w-full" id="state" name="state" onChange={handleStoreForm} type="text" value={store.state || ""} />
                    <label className="label-layout peer-focus:text-gray-950" htmlFor="state">* State</label>
                </div>
                <div className="relative">
                    <input className="input-layout peer w-full" id="zipcode" name="zipcode" onChange={handleStoreForm} type="number" value={store.zipcode || ""} />
                    <label className="label-layout peer-focus:text-gray-950" htmlFor="zipcode">* Zipcode</label>
                </div>
            </div>
            <div className="flex gap-3 w-full">
                <button className="button-secondary w-full" onClick={() => setDisplayAddStore(false)}>Cancel</button>
                <button className="button-primary w-full" onClick={handleAddStore}>Submit</button>
            </div>
        </motion.form>
    )
}