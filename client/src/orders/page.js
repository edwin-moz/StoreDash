import { getOrders } from "../managers/orders"
import { useEffect, useState } from "react"
export const Orders = ({ loggedInUser }) => {
    // state
    const [orders, setOrders] = useState([])
    // handle function to get orders
    const handleGetOrders = () => {
        getOrders(loggedInUser.id).then(setOrders)
    }
    // handle function to display items
    const handleDisplayOrderItems = (orderId) => {
        const copy = orders.map((order) => {
            if (order.id === orderId) {
                order.displayOrder = true
                return order
            }
            return order
        })
        setOrders(copy)
    }
    // useEffect
    useEffect(() => { handleGetOrders() }, [loggedInUser])
    return (
        <div className="flex flex-col items-center">
            <div className="w-2/4">
                <div className="flex justify-between">
                    <div className="py-10">
                        <h1 className="text-3xl tracking-wide">My Orders</h1>
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
                                <div className="bg-gray-50 border-b flex justify-between p-3">
                                    <div>
                                        <p className="font-normal text-gray-500 tracking-wider">Placed on:</p>
                                        <p className="tracking-widest">{new Date(order.date).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p className="font-normal text-gray-500 tracking-wider">Total:</p>
                                        <p className="tracking-widest">${order.total.toFixed(2)}</p>
                                    </div>
                                    <div>
                                        <p className="font-normal text-gray-500 tracking-wider">Ship to:</p>
                                        <p>{order.store.name}</p>
                                    </div>
                                    <div>
                                        <p className="font-normal text-gray-500 tracking-wider">Order # <span className="text-gray-950">{order.id}</span></p>
                                        {/* <p>{order.fulfilled ? "fulfilled" : "pending"}</p> */}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {!order.displayOrder && (
                                            <p className="hover:cursor-pointer text-center font-light w-full" onClick={() => handleDisplayOrderItems(order.id)}>click to expand</p>
                                        )}
                                        {order.displayOrder && (
                                            <ul className="flex flex-col px-5">
                                                {order.inventoryOrders.map((inventoryOrder, index) => (
                                                    <li className="grid grid-cols-[2fr,2fr,2fr,2fr] items-center p-3" key={index}>
                                                        <div>
                                                            <img className="h-16" src={inventoryOrder.inventory.product.imageUrl} alt="" />
                                                        </div>
                                                        <div>
                                                            <p>{inventoryOrder.inventory.product.name}</p>
                                                        </div>
                                                        <div>
                                                            <p>${inventoryOrder.inventory.price.toFixed(2)}</p>
                                                        </div>
                                                        <div>
                                                            <p>qty: {inventoryOrder.quantity}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
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