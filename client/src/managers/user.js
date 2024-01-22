const api = "/api/userprofile"
export const editUser = (user) => {
    return fetch(`${api}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
}