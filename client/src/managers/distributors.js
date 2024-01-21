const api = "/api/distributor"
export const getDistributor = (distributorId) => {
    return fetch(`${api}/${distributorId}`).then((response) => response.json())
}
export const getDistributors = () => {
    return fetch(api).then((response) => response.json())
}