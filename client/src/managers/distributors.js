const api = "/api/distributor"
export const getDistributors = () => {
    return fetch(api).then((response) => response.json())
}