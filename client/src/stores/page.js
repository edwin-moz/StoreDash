import { useEffect, useState } from "react"
import { deleteStore, getStores } from "../managers/stores"
import { NewStore } from "./new"
import { EditStore } from "./edit"
export const Stores = ({ loggedInUser }) => {
    // state
    const [stores, setStores] = useState([])
    const [chosenStore, setChosenStore] = useState({})
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
        <div className="flex">
            <ul className="flex flex-wrap">
                {stores.map((store, index) => (
                    <li className="flex gap-5">
                        <div className="border flex">
                            <div className="flex flex-col">
                                <div>
                                    <p>{store.name}</p>
                                </div>
                                <div>
                                    <p>{store.street}</p>
                                    <p>{store.city} {store.state} {store.zipcode}</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <button onClick={() => handleDeleteStore(store.id)}>mark inactive</button>
                                <button onClick={() => setChosenStore(store)}>edit store</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <NewStore loggedInUser={loggedInUser} handleGetStores={handleGetStores} />
            </div>
            <div>
                <EditStore chosenStore={chosenStore} handleGetStores={handleGetStores} />
            </div>
        </div>
    )
}