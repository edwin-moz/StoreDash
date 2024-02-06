import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDistributor } from "../managers/distributors"
import { getStores } from "../managers/stores"
import { motion } from "framer-motion"
import { Cart } from "./cart"
export const NewOrder = ({ loggedInUser }) => {
    // hooks
    const { distributorId } = useParams()
    // state
    const [distributor, setDistributor] = useState({})
    const [storeChosen, setStoreChosen] = useState(false)
    const [distributorToDisplay, setDistributorToDisplay] = useState({})
    const [orderInventory, setOrderInventory] = useState([])
    const [orderTotal, setOrderTotal] = useState(0)
    const [stores, setStores] = useState([])
    const [chosenStoreId, setChosenStoreId] = useState(0)
    const [searchProduct, setSearchProduct] = useState("")
    const [displayCart, setDisplayCart] = useState(false)
    // handle function to get distributor
    const handleGetDistributor = () => {
        getDistributor(distributorId).then((data) => {
            setDistributor(data)
            setDistributorToDisplay(data)
        })
    }
    // handle function to get stores
    const handleGetStores = () => {
        getStores(loggedInUser.id).then(setStores)
    }
    // handle function for the chosen store
    const handleChosenStore = (event) => {
        const storeId = event.target.value * 1
        setChosenStoreId(storeId)
        setStoreChosen(true)
    }
    // handle function to set search product
    const handleSetSearchProduct = (event) => {
        const value = event.target.value
        setSearchProduct(value)
    }
    // handle function to search for a product name
    const handleSearchProduct = () => {
        const copy = { ...distributor }
        copy.inventories = distributor.inventories.filter((inventory) => inventory.product.name.toLowerCase().includes(searchProduct))
        setDistributorToDisplay(copy)
    }
    // handle back button
    const handleBackButton = () => {
        setSearchProduct("")
        setDistributorToDisplay(distributor)
        setOrderTotal(0)
        setStoreChosen(false)
        setDisplayCart(false)
        setOrderInventory([])
    }
    // handle function to add to cart
    const handleAddToCart = (inventory) => {
        const copy = [...orderInventory]
        copy.push({
            inventoryId: inventory.id,
            quantity: 1
        })
        setOrderInventory(copy)
        setOrderTotal(orderTotal + inventory.price)
    }
    // handle function to remove from cart
    const handleRemoveFromCart = (inventory) => {
        const copy = orderInventory.filter((orderInventory) => orderInventory.inventoryId !== inventory.id)
        setOrderInventory(copy)
        setOrderTotal(orderTotal - inventory.price)
    }
    // use effect
    useEffect(() => {
        handleGetDistributor()
        handleGetStores()
    }, [distributorId, loggedInUser])
    // component return
    return (
        <div className="grid grid-cols-1 min-h-[87vh] md:flex">
            <div className="flex flex-col w-full">
                <motion.div animate={{ opacity: 1 }} className="px-5 sm:px-10 py-3" initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                    <p>Welcome to</p>
                    <h1 className="font-bold text-3xl text-gray-950 tracking-wide">{distributor.name}</h1>
                </motion.div>
                {!storeChosen && (
                    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5, duration: 1 }} className="flex flex-col flex-grow gap-5 items-center justify-center">
                        <p>Select your store to begin</p>
                        <select className="border-2 h-[3rem] focus:border-2 hover:border-blue-500 rounded-full text-center text-gray-950 w-[30rem]" name="stores" onChange={handleChosenStore}>
                            <option>Choose your store</option>
                            {stores.map((store, index) => (
                                <option key={index} value={store.id}>{store.name}</option>
                            ))}
                        </select>
                    </motion.div>
                )}
                {storeChosen && (
                    <div className="flex flex-col gap-5 flex-grow">
                        <motion.div animate={{ x: 0 }} initial={{ x: -1300 }} className="md:bg-emerald-900 md:py-10">
                            <div className="flex flex-wrap gap-5 px-5 sm:px-10">
                                <input className="border-2 focus:border-blue-500 h-[3rem] outline-none px-5 rounded-full flex flex-grow text-gray-950" name="search" onChange={handleSetSearchProduct} placeholder="Search by product name..." type="search" value={searchProduct} />
                                <button className="active:scale-95 active:translate-y-1 bg-emerald-700 font-semibold h-[3rem] md:w-[8rem] px-5 rounded-full shadow-md shadow-black/50 text-white tracking-wider transition w-full" onClick={handleSearchProduct}>Search</button>
                                <button className="active:scale-95 active:translate-y-1 bg-gray-600 font-semibold h-[3rem] md:w-[8rem] px-5 rounded-full shadow-md shadow-black/50 text-white tracking-wider transition w-full" onClick={handleBackButton}>
                                    Back
                                </button>
                                {!displayCart && (
                                    <button className="active:scale-95 active:translate-y-1 bg-gray-600 font-semibold h-[3rem] md:w-[8rem] px-5 rounded-full shadow-md shadow-black/50 text-white tracking-wider transition w-full" onClick={() => setDisplayCart(true)}>
                                        Cart
                                    </button>
                                )}
                            </div>
                        </motion.div>
                        <motion.ul animate={{ scale: 1 }} initial={{ scale: 0 }} className="gap-5 grid grid-cols-3 md:grid-cols-5 pb-10">
                            {distributorToDisplay.inventories?.map((inventory, index) => (
                                <li className="gap-3 grid grid-rows-[2fr, 1fr]" key={index}>
                                    <div className="flex justify-center">
                                        <img className="h-[5rem] object-cover rounded-full text-center w-[5rem]" src={inventory.product?.imageUrl} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-center text-gray-500">{inventory.product?.name}</p>
                                        <p className="text-center text-gray-950">{inventory.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                        <div className="flex flex-wrap justify-center">
                                            {orderInventory.some((oi) => oi.inventoryId === inventory.id) ? (
                                                <button className="button-secondary" onClick={() => handleRemoveFromCart(inventory)}>Remove from cart</button>
                                            ) : (
                                                <button className="button-primary" onClick={() => handleAddToCart(inventory)}>Add to cart</button>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </motion.ul>
                    </div>
                )}
            </div>
            {displayCart && (
                <Cart chosenStoreId={chosenStoreId} distributor={distributor} orderInventory={orderInventory} orderTotal={orderTotal} />
            )}
        </div>
    )
}