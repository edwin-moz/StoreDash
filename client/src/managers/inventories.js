const api = "/api/inventory"
export const addInventory = (inventory) => {
    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inventory)
    })
}
export const editInventory = (inventory) => {
    return fetch(`${api}/${inventory.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inventory)
    })
}
export const deleteInventory = (inventoryId) => {
    return fetch(`${api}/${inventoryId}`, {
        method: "DELETE"
    })
}