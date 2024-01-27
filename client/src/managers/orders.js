const api = "/api/order"
// function to post a new order
export const placeOrder = (order) => {
    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order)
    })
}
// function to get all of the logged in user's ordes
export const getOrders = (userId) => {
    return fetch(`${api}/${userId}`).then((response) => response.json())
}