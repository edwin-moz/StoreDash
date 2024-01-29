const api = "/api/type"
export const getTypes = () => {
    return fetch(api).then((response) => response.json())
}
export const AddType = (type) => {
    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(type)
    })
}
export const editType = (type) => {
    return fetch(`${api}/${type.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(type)
    })
}
export const deleteType = (typeId) => {
    return fetch(`${api}/${typeId}`, {
        method: "DELETE"
    })
}