import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDistributor } from "../managers/distributors"
import { getStores } from "../managers/stores"
import { placeOrder } from "../managers/orders"
export const NewOrder = ({ loggedInUser }) => {
    // hooks
    const { distributorId } = useParams()
    const navigate = useNavigate()
    // state
    const [distributor, setDistributor] = useState({})
    const [distributorToDisplay, setDistributorToDisplay] = useState({})
    const [orderInventory, setOrderInventory] = useState([])
    const [orderTotal, setOrderTotal] = useState(0)
    const [stores, setStores] = useState([])
    const [chosenStoreId, setChosenStoreId] = useState(0)
    const [searchProduct, setSearchProduct] = useState("")
    // handle function to get distributor
    const handleGetDistributor = () => {
        getDistributor(distributorId).then((data) => {
            setDistributor(data)
            setDistributorToDisplay(data)
        })
    }
    // handle function for the new order
    const handleOrderIventory = (event) => {
        const value = event.target.value * 1
        const checked = event.target.checked
        if (checked) {
            setOrderInventory(() => {
                const copy = [...orderInventory]
                copy.push({
                    inventoryId: value,
                    quantity: 1
                })
                return copy
            })
            setOrderTotal(() => {
                let copy = orderTotal
                copy += distributor.inventories.find((inventory) => inventory.id === value).price
                return copy
            })
        } else if (!checked) {
            setOrderInventory(() => {
                const filteredOrderInventory = orderInventory.filter((oi) => oi.inventoryId !== value)
                return filteredOrderInventory
            })
            setOrderTotal(() => {
                let copy = orderTotal
                copy -= distributor.inventories.find((inventory) => inventory.id === value).price
                return copy
            })
        }
    }
    // handle function to get stores
    const handleGetStores = () => {
        getStores(loggedInUser.id).then(setStores)
    }
    // handle function for the chosen store
    const handleChosenStore = (event) => {
        const storeId = event.target.value * 1
        setChosenStoreId(storeId)
    }
    // handle function to place order
    const handlePlaceOrder = () => {
        const order = {
            storeId: chosenStoreId,
            inventoryOrders: orderInventory
        }
        placeOrder(order).then(() => {
            navigate("/orders")
        })
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
    // use effect
    useEffect(() => {
        handleGetDistributor()
        handleGetStores()
    }, [distributorId, loggedInUser])
    // component return
    return (
        <div className="flex">
            <div className="px-10">
                <div className="flex justify-between py-10">
                    <div className="self-center">
                        <h1 className="text-3xl text-gray-900 tracking-wide">{distributor.name}</h1>
                    </div>
                    <div className="self-center">
                        <input className="border h-[2rem] rounded text-center text-gray-600 w-[20rem]" defaultValue={searchProduct} onChange={handleSetSearchProduct} placeholder="Search by product name..." type="search" value={searchProduct} />
                        <button onClick={handleSearchProduct}>search</button>
                    </div>
                    <div className="flex gap-3 items-center">
                        <p className="self-end">choose a store:</p>
                        <select className="border h-[2rem] rounded text-center text-gray-600 w-[10rem]" onChange={handleChosenStore}>
                            <option>choose a store</option>
                            {stores.map((store, index) => (
                                <option key={index} value={store.id}>{store.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <ul className="flex flex-wrap justify-evenly pb-10">
                    {distributorToDisplay.inventories?.map((inventory, index) => (
                        <li className="grid grid-rows-[2fr, 1fr, 1fr, 1fr] items-center w-[7rem]" key={index}>
                            <div className="flex justify-center row-span-2">
                                <img className="h-[5rem]" src={inventory.product?.imageUrl} alt="" />
                            </div>
                            <div className="row-span-1 text-center">
                                <p className="text-gray-400">{inventory.product?.name}</p>
                            </div>
                            <div className="row-span-1 text-center">
                                <p className="text-gray-900">${inventory.price.toFixed(2)}</p>
                            </div>
                            <div className="row-span-1 text-center">
                                <input onChange={handleOrderIventory} type="checkbox" value={inventory.id} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border-l-2 p-5">
                <div className="flex flex-col w-[20rem]">
                    <div className="flex justify-between">
                        <div>
                            <p>subtotal: <span>({orderInventory.length} items)</span></p>
                        </div>
                        <div>
                            <p>${orderTotal.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="flex my-3">
                        <button className="bg-emerald-500 border h-10 hover:bg-emerald-400 rounded-full text-white transition w-full" onClick={handlePlaceOrder}>place order</button>
                    </div>
                    <div>
                        <ul className="flex flex-col overflow-scroll h-[30rem]">
                            {orderInventory.map((oi, index) => (
                                <li className="flex flex-col py-3" key={index}>
                                    <div className="flex gap-3 ml-10">
                                        {/* <div>
                                            <input type="checkbox" />
                                        </div> */}
                                        <div className="self-center">
                                            <img className="w-[5rem]" src={distributor.inventories?.find((inventory) => inventory.id === oi.inventoryId).product.imageUrl} alt="" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div>
                                                <p>{distributor.inventories?.find((inventory) => inventory.id === oi.inventoryId).product.name}</p>
                                            </div>
                                            <div>
                                                <p>${distributor.inventories?.find((inventory) => inventory.id === oi.inventoryId).price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}