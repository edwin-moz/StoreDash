const ORDER_API_URL = "/api/order"

export const deleteOrder = async (orderId) => {
    const endpointUrl = `${ORDER_API_URL}/${orderId}`

    const response = await fetch(endpointUrl, {
        method: "DELETE"
    })

    return response.json()
}

export const getOrders = async (userId) => {
    const endpointUrl = `${ORDER_API_URL}/${userId}`

    const response = await fetch(endpointUrl)

    return response.json()
}

export const placeOrder = async (order) => {
    const response = await fetch(ORDER_API_URL, {
        body: JSON.stringify(order),
        headers: { "Content-Type": "application/json" },
        method: "POST",
    })

    return response.json()
}


