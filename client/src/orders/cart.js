import { useNavigate } from "react-router-dom"
import { placeOrder } from "../managers/orders"
import { motion } from "framer-motion"
export const Cart = ({ chosenStoreId, displayCart, setDisplayCart, distributor, orderInventory, orderTotal }) => {
    // hooks
    const navigate = useNavigate()
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
    return (
        <motion.div animate={{ opacity: 1, x: 0, }} initial={{ opacity: 0, x: 100 }} className={`bg-white ${displayCart ? "block" : "hidden"} border-l-2 md:block md:w-[30rem]`}>
            <div className="flex justify-end pt-5 px-5">
                <button className="button-secondary" onClick={() => setDisplayCart(false)}>Back to order</button>
            </div>
            <div className="flex flex-wrap gap-5 justify-between p-5">
                <p>Subtotal: <span className="text-gray-950">({orderInventory.length} items)</span></p>
                <p>{orderTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>
            <div className="px-5">
                <button className="active:scale-95 active:translate-y-1 bg-emerald-700 font-semibold h-[3rem] px-5 rounded-full shadow-md shadow-black/50 text-white tracking-wider transition w-full" onClick={handlePlaceOrder}>Place order</button>
            </div>
            <ul className="gap-5 grid grid-cols-3 md:flex md:flex-col md:flex-nowrap overflow-scroll py-5">
                {orderInventory.map((oi, index) => (
                    <li className="flex flex-col items-center lg:grid lg:grid-cols-2" key={index}>
                        <div className="flex justify-center">
                            <img className="h-[5rem] object-cover rounded-full w-[5rem]" src={distributor.inventories?.find((inventory) => inventory.id === oi.inventoryId).product.imageUrl} alt="" />
                        </div>
                        <div>
                            <p>{distributor.inventories?.find((inventory) => inventory.id === oi.inventoryId).product.name}</p>
                            <p>{distributor.inventories?.find((inventory) => inventory.id === oi.inventoryId).price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}