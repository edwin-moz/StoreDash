const api = "/api/distributor"
// funtion to add a distributor
export const addDistributor = (distributor) => {
    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(distributor)
    })
}
// funtion to get a distributor;s inventory
export const getDistributor = (distributorId) => {
    return fetch(`${api}/${distributorId}`).then((response) => response.json())
}
// function to get the list of distributors
export const getDistributors = () => {
    return fetch(api).then((response) => response.json())
}
// function to edit a distributor
export const editDistributor = (distributor) => {
    return fetch(`${api}/${distributor.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(distributor)
    })
}
export const deleteDistributor = (distributorId) => {
    return fetch(`${api}/${distributorId}`, {
        method: "DELETE"
    })
}