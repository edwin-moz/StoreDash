import { useEffect, useState } from "react"
import { deleteStore, getStores } from "../managers/stores"
import { AddStore } from "./add"
import { EditStore } from "./edit"
import { motion } from "framer-motion"
export const Stores = ({ loggedInUser }) => {
    // state
    const [stores, setStores] = useState([])
    const [chosenStore, setChosenStore] = useState({})
    const [displayAddStore, setDisplayAddStore] = useState(false)
    const [displayEditStore, setDisplayEditStore] = useState(false)
    // handle function to get stores
    const handleGetStores = () => {
        getStores(loggedInUser.id).then(setStores)
    }
    // handle function for display edit form
    const handleDisplayEditForm = (store) => {
        setChosenStore(store)
        setDisplayEditStore(true)
        setDisplayAddStore(false)
    }
    // handle function to remove store
    const handleDeleteStore = (storeId) => {
        deleteStore(storeId).then(() => {
            handleGetStores()
        })
    }
    //use effect
    useEffect(() => { handleGetStores() }, [loggedInUser])
    return (
        <div className="p-10 min-h-[87vh]">
            <div className="flex flex-wrap gap-10 justify-between">
                <motion.h1 animate={{ x: 0 }} initial={{ x: -210 }} className="font-bold text-4xl text-gray-950 tracking-wide">My Stores</motion.h1>
                <button className={`active:scale-95 active:translate-y-1 bg-emerald-700 ${displayAddStore ? "hidden" : "block"} md:block font-semibold h-[3rem] md:w-[8rem] px-5 rounded-full shadow-md shadow-black/50 text-white tracking-wider transition w-full`} onClick={() => {
                    setDisplayAddStore(true)
                    setDisplayEditStore(false)
                }}>Add Store</button>
            </div>
            <div className="border-t mt-10 mb-10"></div>
            <div className="flex">
                <ul className={`md:flex ${displayAddStore ? "hidden" : "flex"} flex-col gap-3 md:w-full`}>
                    {stores.map((store, index) => (
                        <motion.li whileHover={{ x: 20 }} className="bg-white border group max-w-[25rem] p-5 rounded-lg shadow-sm" key={index}>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <p>{store.name}</p>
                                    <div>
                                        <p>{store.street}</p>
                                        <p>{store.city} {store.state} {store.zipcode}</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start opacity-0 group-hover:opacity-100 transition">
                                    <button onClick={() => handleDisplayEditForm(store)}>
                                        <svg className="h-[2rem] w-[2rem]"><path d="M7.676 18.837l-2.472-2.48-2.015 2.023-.476 2.914 2.95-.44 2.012-2.017zm7.247-12.223l-8.597 8.62 2.472 2.478 8.596-8.62-2.47-2.478zm5.693 1.496l-1.504 1.508c-.012.014-.016.03-.03.044-.01.013-.028.016-.042.027l-9.647 9.674c-.012.014-.016.03-.028.042-.012.013-.03.016-.042.028L6.6 22.166c-.122.12-.277.2-.445.223l-4.048.602c-.04.006-.078.008-.117.008-.253 0-.476-.128-.623-.322-.26-.167-.41-.475-.356-.8l.655-4.007c.027-.164.105-.316.222-.432l12.475-12.51 1.563-1.567c.31-.31.81-.31 1.12 0 .31.31.31.814 0 1.124l-1 1.005 2.47 2.478.98-.982c.31-.31.812-.31 1.12 0 .31.31.31.813 0 1.124zm1.59-1.91c-.202 0-.405-.078-.56-.233l-3.6-3.61c-.31-.31-.31-.813 0-1.124.31-.31.812-.31 1.122 0l3.6 3.61c.31.31.31.814 0 1.124-.156.155-.36.232-.562.232z"></path></svg>
                                    </button>
                                    <button onClick={() => handleDeleteStore(store.id)}>
                                        <svg className="h-[2rem] w-[2rem]"><path d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75zm0-1.5c-5.11 0-9.25-4.14-9.25-9.25S6.89 2.75 12 2.75s9.25 4.14 9.25 9.25-4.14 9.25-9.25 9.25z"></path><path d="M7.58 12.75h9.266c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H7.58c-.414 0-.75.336-.75.75s.336.75.75.75z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
                {displayAddStore && (
                    <div className="w-full md:w-auto">
                        <AddStore loggedInUser={loggedInUser} handleGetStores={handleGetStores} displayAddStore={displayAddStore} setDisplayAddStore={setDisplayAddStore} />
                    </div>
                )}
                {displayEditStore && (
                    <div>
                        <EditStore chosenStore={chosenStore} handleGetStores={handleGetStores} setDisplayEditStore={setDisplayEditStore} />
                    </div>
                )}
            </div>
        </div>
    )
}