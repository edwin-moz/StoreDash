import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context-provider";
import { DistributorContext } from "../contexts/distributor-context-provider";

export function useAuthContext() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new error("useauthcontext must be within a authcontextprovider component.")
    }

    return context
}

export const useDistributorContext = () => {
    const context = useContext(DistributorContext)

    if (!context) {
        throw new error("useauthcontext must be within a authcontextprovider component.")
    }

    return context
}
