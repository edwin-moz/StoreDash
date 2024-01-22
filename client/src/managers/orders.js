const api = "/api/order"
export const placeOrder = (order) => {
    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order)
    })
}
export const getOrders = (userId) => {
    console.log("🚀 ~ getOrders ~ userId:", userId)
    return fetch(`${api}/${userId}`).then((response) => response.json())
}