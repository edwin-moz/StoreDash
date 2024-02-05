import { getOrders } from "../managers/orders"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
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
        <div className="flex flex-col w-full min-h-[87vh]">
            <motion.div animate={{ x: 0 }} initial={{ x: -190 }} className="p-10">
                <h1 className="font-bold text-3xl text-gray-950 tracking-wide">My Orders</h1>
            </motion.div>
            <motion.ul animate={{ x: 0 }} initial={{ x: 1500 }} className="flex flex-col gap-5 pb-10 px-10">
                {orders.map((order, index) => (
                    <li className="bg-white border overflow-hidden rounded-lg" key={index}>
                        <div className="bg-gray-50 border-b grid grid-cols-4 px-10 py-3">
                            <div className="flex flex-col items-center">
                                <p className="font-normal text-gray-500 tracking-wider">Placed on:</p>
                                <p className="text-gray-950 tracking-widest">{new Date(order.date).toLocaleDateString()}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="font-normal text-gray-500 tracking-wider">Total:</p>
                                <p className="text-gray-950 tracking-widest">{order.total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="font-normal text-gray-500 tracking-wider">Ship to:</p>
                                <p className="text-gray-950 tracking-widest">{order.store.name}</p>
                            </div>
                            <div className="flex gap-3 justify-center">
                                <p className="font-normal text-gray-500 tracking-wider">Order #</p>
                                <span className="text-gray-950 tracking-widest">{order.id}</span>
                                {/* <p>{order.fulfilled ? "fulfilled" : "pending"}</p> */}
                            </div>
                        </div>
                        <div>
                            {!order.displayOrder && (
                                <div className="flex justify-center relative">
                                    <div className="bg-white px-3 z-10">
                                        <p className="hover:cursor-pointer hover:scale-110 text-center font-light transition" onClick={() => handleDisplayOrderItems(order.id)}>Click to expand</p>
                                    </div>
                                    <div className="absolute border inset-1/2 left-1/2 top-1/2 -translate-x-1/2 w-1/3"></div>
                                </div>
                            )}
                            {order.displayOrder && (
                                <ul className="flex flex-col gap-5 py-5">
                                    {order.inventoryOrders.map((inventoryOrder, index) => (
                                        <li className="grid grid-cols-2 md:grid-cols-[2fr,1fr,1fr] items-center px-5" key={index}>
                                            <div className="hidden md:flex md:justify-center">
                                                <img className="h-16 object-cover rounded-full w-16" src={inventoryOrder.inventory.product.imageUrl} alt="" />
                                            </div>
                                            <p>{inventoryOrder.inventory.product.name}</p>
                                            <p>{inventoryOrder.inventory.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                            {/* <p>qty: {inventoryOrder.quantity}</p> */}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {/* <div>
                                    <div>
                                        <button>cancel order</button>
                                    </div>
                                </div> */}
                    </li>
                ))}
            </motion.ul>
        </div>
    )
}