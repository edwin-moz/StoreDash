const api = "/api/inventory"
export const editInventory = (inventory) => {
    return fetch(`${api}/${inventory.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inventory)
    })
}