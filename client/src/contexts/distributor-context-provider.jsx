import { createContext, useEffect, useState } from "react";
import { addDistributor, deleteDistributor, getDistributors } from "../managers/distributors";

export const DistributorContext = createContext(null)

export default function DistributorContextProvider({ children }) {

    const [distributors, setDistributors] = useState([])
    const [distributorToAdd, setDistributorToAdd] = useState({})
    const [distributorToEdit, setDistributorToEdit] = useState({})

    const handleGetAndSetDistributors = async () => {
        const d = await getDistributors()

        setDistributors(d)
    }

    const handleDeleteDistributor = (distributorId) => {
        deleteDistributor(distributorId).then(() => {
            handleGetAndSetDistributors()
        })
    }

    const handleSetDistributorToAdd = (distributor) => {
        setDistributorToAdd(distributor)
    }

    const handleSetDistributorToEdit = (distributor) => {
        setDistributorToEdit(distributor)
    }

    const handleAddDistributorToDatabase = () => {
        addDistributor(distributorToAdd).then(() => {
            setDistributorToAdd({})

            handleGetAndSetDistributors()
        })
    }
    useEffect(() => {
        handleGetAndSetDistributors()
    }, [])

    return (
        <DistributorContext.Provider value={{
            distributorToAdd,
            distributorToEdit,
            distributors,
            handleAddDistributorToDatabase,
            handleDeleteDistributor,
            handleGetAndSetDistributors,
            handleSetDistributorToAdd,
            handleSetDistributorToEdit
        }}>
            {children}
        </DistributorContext.Provider>
    )
}
