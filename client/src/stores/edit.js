import { useEffect, useState } from "react"
import { editStore } from "../managers/stores"
import { motion } from "framer-motion"
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
    const handleEditStore = (event) => {
        event.preventDefault()
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
        <motion.form animate={{ x: 0 }} initial={{ x: 400 }} className="flex flex-col gap-3 md:border md:bg-white md:p-5 rounded-lg w-full">
            <p><span className="text-emerald-600">*</span> indicates required field</p>
            <div className="relative">
                <input className="input-layout md:w-auto peer w-full" name="name" onChange={handleStoreForm} type="text" value={store.name || ""} />
                <label className="label-layout peer-focus:text-gray-950">* Name</label>
            </div>
            <div className="relative">
                <input className="input-layout peer w-full" name="street" onChange={handleStoreForm} type="text" value={store.street || ""} />
                <label className="label-layout peer-focus:text-gray-950">* Street</label>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
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
            <div className="flex flex-wrap gap-3 md:flex-nowrap w-full">
                <button className="button-secondary w-full" onClick={(event) => {
                    event.preventDefault()
                    setDisplayEditStore(false)
                }}>Cancel</button>
                <button className="button-primary w-full" onClick={handleEditStore}>Update</button>
            </div>
        </motion.form>
    )
}