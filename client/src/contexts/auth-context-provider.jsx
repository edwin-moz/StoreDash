import React, { createContext, useEffect, useState } from "react"
import { tryGetLoggedInUser } from "../managers/authentication"

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    console.log("🚀 ~ AuthContextProvider ~ user:", user)

    const handleGetUser = async () => {
        const data = await tryGetLoggedInUser()

        setUser(data)
    }

    const handleSetUserOnLogin = (data) => {
        setUser(data)
    }

    const handleSetUserOnLogout = () => {
        setUser(null)
    }

    useEffect(() => {
        handleGetUser()
    }, [])
    return (
        <AuthContext.Provider
            value={{
                handleGetUser,
                handleSetUserOnLogin,
                handleSetUserOnLogout,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
