import { Products } from "./products/page"
import { Types } from "./type/page"
import { getTypes } from "../managers/types"
import { useEffect, useState } from "react"
import { Menu } from "./menu/menu"
import { motion } from "framer-motion"
import { Distributors } from "./distributors/page"
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
        <>
            {/* <div className="bg-stone-100 fixed z-[-999] h-screen w-screen"></div> */}
            {menuToDisplay === "" && <motion.p animate={{ opacity: 1 }} className="flex flex-col items-center justify-center max-h-[87vh] min-h-[87vh] text-4xl w-full" initial={{ opacity: 0 }} transition={{ duration: 2 }}>Select one of the menu options to begin...</motion.p>}
            <div>
                {menuToDisplay === "Products" && <Products types={types} />}
                {menuToDisplay === "Types" && <Types types={types} handleGetTypes={handleGetTypes} />}
                {menuToDisplay === "Distributors" && <Distributors />}
                {menuToDisplay === "Inventory" && <Inventory />}
                <Menu menuToDisplay={menuToDisplay} setMenuToDisplay={setMenuToDisplay} />
            </div>
        </>
    )
}