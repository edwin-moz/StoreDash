import { Products } from "./products/products"
import { Types } from "./type/types"
import { getTypes } from "../managers/types"
import { useEffect, useState } from "react"
import { Menu } from "./menu/menu"
import { motion } from "framer-motion"
import { Distributors } from "./distributors/distributors"
import { Inventory } from "./inventory/page"
export const Admin = () => {
    // state
    const [types, setTypes] = useState([])
    const [menuToDisplay, setMenuToDisplay] = useState("")
    // handle function to get types
    const handleGetTypes = () => {
        getTypes().then(setTypes)
    }
    useEffect(() => {
        handleGetTypes()
    }, [])
    return (
        <div className="flex flex-col h-lvh">
            {menuToDisplay === "" && <motion.p animate={{ opacity: 1 }} className="flex h-full items-center justify-center text-4xl w-full" initial={{ opacity: 0 }} transition={{ duration: 2 }}>Select one of the menu options to begin...</motion.p>}
            {menuToDisplay === "Products" && <Products types={types} />}
            {menuToDisplay === "Types" && <Types types={types} handleGetTypes={handleGetTypes} />}
            {menuToDisplay === "Distributors" && <Distributors />}
            {menuToDisplay === "Inventory" && <Inventory />}
            <Menu menuToDisplay={menuToDisplay} setMenuToDisplay={setMenuToDisplay} />
        </div>
    )
}