const INVENTORY_API_URL = "/api/inventory"

export const addInventory = async (inventory) => {
    const response = await fetch(INVENTORY_API_URL, {
        body: JSON.stringify(inventory),
        headers: { "Content-Type": "application/json" },
        method: "POST",
    })

    return response.json()
}

export const deleteInventory = async (inventoryId) => {
    const endpointUrl = `${INVENTORY_API_URL}/${inventoryId}`

    const response = await fetch(endpointUrl, {
        method: "DELETE"
    })

    return response.json()
}

export const editInventory = async (inventory) => {
    const endpointUrl = `${INVENTORY_API_URL}/${inventory.id}`

    const response = await fetch(endpointUrl, {
        body: JSON.stringify(inventory),
        headers: { "Content-Type": "application/json" },
        method: "PUT",
    })

    return response.json()
}
