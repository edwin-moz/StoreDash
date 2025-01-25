const _apiUrl = "/api/authorization"

const toBtoa = (email, password) => {
    return btoa(`${email}:${password}`)
}

// the purpose of this file is ONLY to fetch and return status

// each function needs to follow this order
// hash credentials
// fetch response
// check response status and return request
export const login = async (email, password) => {
    const hashedCredentials = toBtoa(email, password)

    const response = await fetch(_apiUrl + "/login", {
        credentials: "same-origin",
        headers: {
            Authorization: `Basic ${hashedCredentials}`
        },

        method: "POST",
    })

    if (response.status !== 200) {
        return Promise.resolve(null)
    } else if (response.status === 200) {
        return tryGetLoggedInUser()
    }
}

export const logout = async () => {
    return await fetch(_apiUrl + "/logout")
}

export const register = async (userProfile) => {
    // hash the raw password
    userProfile.password = btoa(userProfile.password)

    // backend will handle verification
    await fetch(_apiUrl + "/register", {
        credentials: "same-origin",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userProfile),
    })

    return tryGetLoggedInUser()
}

export const tryGetLoggedInUser = async () => {
    const response = await fetch(_apiUrl + "/me")

    if (response.status == 401) {
        return Promise.resolve(null)
    } else {
        return response.json()
    }
}
