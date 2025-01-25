const DISTRIBUTOR_API_URL = "/api/distributor"
// this file is meant ONLY to fetch and return the data
export const addDistributor = async (distributor) => {
    const response = await fetch(DISTRIBUTOR_API_URL, {
        body: JSON.stringify(distributor),
        headers: { "Content-Type": "application/json" },
        method: "POST",
    })

    return response.json()
}

export const deleteDistributor = async (distributorId) => {
    const endpointUrl = `${DISTRIBUTOR_API_URL}/${distributorId}`

    const response = await fetch(endpointUrl, {
        method: "DELETE"
    })

    return response.json()
}

export const getDistributor = async (distributorId) => {
    const endpointUrl = `${DISTRIBUTOR_API_URL}/${distributorId}`

    const response = await fetch(endpointUrl)

    return response.json()
}

export const getDistributors = async () => {
    const response = await fetch(DISTRIBUTOR_API_URL)

    return response.json()
}

export const editDistributor = async (distributor) => {
    const endpointUrl = `${DISTRIBUTOR_API_URL}/${distributor.id}`

    const response = await fetch(endpointUrl, {
        body: JSON.stringify(distributor),
        headers: { "Content-Type": "application/json" },
        method: "PUT",
    })

    return response.json()
}

