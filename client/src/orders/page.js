import { getOrders } from "../managers/orders"
import { useEffect, useState } from "react"
export const Orders = ({ loggedInUser }) => {
    // state
    const [orders, setOrders] = useState([])
    // handle function to get orders
    const handleGetOrders = () => {
        getOrders(loggedInUser.id).then(setOrders)
    }
    // useEffect
    useEffect(() => { handleGetOrders() }, [loggedInUser])
    return (
        <div className="bg-gray-100 flex flex-col items-center">
            <div className="w-2/3">
                <div className="flex justify-between">
                    <div className="py-10">
                        <h1 className="text-3xl">Orders</h1>
                    </div>
                    {/* <div className="flex">
                        <p>filter by:</p>
                        <select>
                            <option>default</option>
                        </select>
                    </div> */}
                </div>
                <div>
                    <ul className="flex flex-col gap-5 pb-10">
                        {orders.map((order, index) => (
                            <li className="bg-white border rounded-lg" key={index}>
                                <div className="border-b flex justify-between p-3">
                                    <div>
                                        <p>placed on:</p>
                                        <p>{new Date(order.date).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p>total:</p>
                                        <p>${order.total}</p>
                                    </div>
                                    <div>
                                        <p>ship to:</p>
                                        <p>{order.store.name}</p>
                                    </div>
                                    <div>
                                        <p>order # {order.id}</p>
                                        {/* <p>{order.fulfilled ? "fulfilled" : "pending"}</p> */}
                                    </div>
                                </div>
                                <div>
                                    <ul className="px-5">
                                        {order.inventoryOrders.map((inventoryOrder, index) => (
                                            <li className="flex justify-between items-center p-3">
                                                <div>
                                                    <img className="h-16" src={inventoryOrder.inventory.product.imageUrl} alt="" />
                                                </div>
                                                <div>
                                                    <p>{inventoryOrder.inventory.product.name}</p>
                                                </div>
                                                <div>
                                                    <p>${inventoryOrder.inventory.price}</p>
                                                </div>
                                                <div>
                                                    <p>qty: {inventoryOrder.quantity}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* <div>
                                    <div>
                                        <button>cancel order</button>
                                    </div>
                                </div> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}