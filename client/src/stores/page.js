import { useEffect, useState } from "react"
import { deleteStore, getStores } from "../managers/stores"
import { NewStore } from "./new"
import { EditStore } from "./edit"
import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
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
    // handle function to remove store
    const handleDeleteStore = (storeId) => {
        deleteStore(storeId).then(() => {
            handleGetStores()
        })
    }
    //use effect
    useEffect(() => { handleGetStores() }, [loggedInUser])
    return (
        <div className="bg-gray-100">
            <div className="p-10">
                <div className="mb-10">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-4xl">Stores</h1>
                        </div>
                        <div>
                            <button className="active:scale-95 active:shadow bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-md" onClick={() => {
                                setDisplayAddStore(true)
                                setDisplayEditStore(false)
                            }}>
                                Add Store
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <ul className="flex gap-5 flex-wrap">
                        {stores.map((store, index) => (
                            <li className="bg-white border h-[8rem] p-3 rounded-md shadow-sm w-[20rem]" key={index}>
                                <div className="flex justify-between">
                                    <div>
                                        <div>
                                            <p>{store.name}</p>
                                        </div>
                                        <div>
                                            <p>{store.street}</p>
                                            <p>{store.city} {store.state} {store.zipcode}</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex gap-3">
                                            <button className="text-xl" onClick={() => {
                                                setChosenStore(store)
                                                setDisplayEditStore(true)
                                                setDisplayAddStore(false)
                                            }}>
                                                <FiEdit />
                                            </button>
                                            <button
                                                className="text-[1.7rem] text-red-600" onClick={() => handleDeleteStore(store.id)}>
                                                <TiDelete />
                                            </button>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {displayAddStore && (
                        <div>
                            <NewStore loggedInUser={loggedInUser} handleGetStores={handleGetStores} setDisplayAddStore={setDisplayAddStore} />
                        </div>
                    )}
                    {displayEditStore && (
                        <div>
                            <EditStore chosenStore={chosenStore} handleGetStores={handleGetStores} setDisplayEditStore={setDisplayEditStore} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}