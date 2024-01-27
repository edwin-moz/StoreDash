const api = "/api/store"
// function to get the list of user's stores
export const getStores = (userId) => {
    return fetch(`${api}/${userId}`).then((response) => response.json())
}
// function to add a new store
export const addStore = (store) => {
    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(store)
    })
}
// function to edit a user's store
export const editStore = (store) => {
    return fetch(`${api}/${store.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(store)
    })
}
// function to delete a user's store
export const deleteStore = (storeId) => {
    return fetch(`${api}/${storeId}`, {
        method: "DELETE"
    })
}