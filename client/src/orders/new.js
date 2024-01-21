import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDistributor } from "../managers/distributors"
export const NewOrder = () => {
    // hooks
    const { distributorId } = useParams()
    // state
    const [distributor, setDistributor] = useState({})
    const [orderInventory, setOrderInventory] = useState([])
    const [orderTotal, setOrderTotal] = useState(0)
    // handle function to get distributor
    const handleGetDistributor = () => {
        getDistributor(distributorId).then(setDistributor)
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
    // use effect
    useEffect(() => { handleGetDistributor() }, [distributorId])
    // component return
    return (
        <div className="flex">
            <div>
                <ul className="flex flex-wrap">
                    {distributor.inventories?.map((inventory, index) => (
                        <li className="border flex flex-col items-center" key={index}>
                            <div>
                                <img className="h-[5rem]" src={inventory.product?.imageUrl} alt="" />
                            </div>
                            <div>
                                <p>{inventory.product?.name}</p>
                            </div>
                            <div>
                                <p>${inventory.price}</p>
                            </div>
                            <div>
                                <input onChange={handleOrderIventory} type="checkbox" value={inventory.id} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <section>
                    <div className="flex flex-col">
                        <div>
                            <p>subtotal: <span>({orderInventory.length} items)</span></p>
                        </div>
                        <div>
                            <p>${orderTotal.toLocaleString()}</p>
                        </div>
                    </div>
                    <div>
                        <button>place order</button>
                    </div>
                    <div>
                        <ul>
                            {orderInventory.map((oi, index) => (
                                <li className="border flex flex-col" key={index}>
                                    <div className="flex">
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <div className="self-center">
                                            <img className="w-[8rem]" src={distributor.inventories?.find((inventory) => inventory.id === oi.inventoryId).product.imageUrl} alt="" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div>
                                                <p>{distributor.inventories?.find((inventory) => inventory.id === oi.inventoryId).product.name}</p>
                                            </div>
                                            <div>
                                                <p>${distributor.inventories?.find((inventory) => inventory.id === oi.inventoryId).price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}