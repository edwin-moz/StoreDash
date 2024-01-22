const api = "/api/store"
export const getStores = (userId) => {
    return fetch(`${api}/${userId}`).then((response) => response.json())
}
export const addStore = (store) => {
    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(store)
    })
}
export const editStore = (store) => {
    return fetch(`${api}/${store.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(store)
    })
}
export const deleteStore = (storeId) => {
    return fetch(`${api}/${storeId}`, {
        method: "DELETE"
    })
}