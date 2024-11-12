import { createContext, useEffect, useState } from "react";
import { deleteDistributor, getDistributors } from "../managers/distributors";

export const DistributorContext = createContext(null)

export default function DistributorContextProvider({ children }) {

    const [distributors, setDistributors] = useState([])

    const handleGetAndSetDistributors = async () => {
        const d = await getDistributors()

        setDistributors(d)
    }

    const handleDeleteDistributor = (distributorId) => {
        deleteDistributor(distributorId).then(() => {
            handleGetAndSetDistributors()
        })
    }

    useEffect(() => {
        handleGetAndSetDistributors()
    }, [])

    return (
        <DistributorContext.Provider value={{
            distributors,
            handleDeleteDistributor,
            handleGetAndSetDistributors,
        }}>
            {children}
        </DistributorContext.Provider>
    )
}
