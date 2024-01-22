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
        <p></p>
    )
}