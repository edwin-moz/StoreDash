const api = "/api/product"

export const getProducts = () => {
    return fetch(api).then((response) => response.json())
}
export const addProduct = (product) => {
    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
    })
}
export const editProduct = (product) => {
    return fetch(`${api}/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
    })
}
export const deleteProduct = (productId) => {
    return fetch(`${api}/${productId}`, {
        method: "DELETE"
    })
}