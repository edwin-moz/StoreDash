const api = "/api/distributor"
// funtion to get a distributor;s inventory
export const getDistributor = (distributorId) => {
    return fetch(`${api}/${distributorId}`).then((response) => response.json())
}
// function to get the list of distributors
export const getDistributors = () => {
    return fetch(api).then((response) => response.json())
}