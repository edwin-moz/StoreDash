import { useAuthContext } from "../lib/hooks"
import { editUser } from "../managers/user"
import { motion } from "framer-motion"

export const EditProfile = ({ updatedUser, setUpdatedUser, setDisplayEditForm }) => {
    const { handleGetUser } = useAuthContext()
    // handle function for edit form
    const handleEditForm = (event) => {
        const name = event.target.name
        const value = event.target.value
        const copy = { ...updatedUser }
        if (name === "firstName") {
            copy.firstName = value
            setUpdatedUser(copy)
        } else if (name === "lastName") {
            copy.lastName = value
            setUpdatedUser(copy)
        } else if (name === "address") {
            copy.address = value
            setUpdatedUser(copy)
        }
    }
    // handle function to edit user
    const handleEditUser = () => {
        editUser(updatedUser).then(() => {
            handleGetUser()
            setDisplayEditForm(false)
        })
    }
    return (
        <motion.div animate={{ x: 0 }} initial={{ x: -100 }} className="self-start md:w-auto w-full">
            <div className="flex flex-col gap-5 md:bg-white md:border md:p-5 md:rounded">
                <p><span className="text-emerald-600">*</span> indicates required field</p>
                <div className="relative">
                    <input className="input-layout md:w-auto peer w-full" id="firstName" name="firstName" onChange={handleEditForm} type="text" value={updatedUser.firstName || ""} />
                    <label className="label-layout peer-focus:text-gray-950" htmlFor="firstName">* First name</label>
                </div>
                <div className="relative">
                    <input className="input-layout md:w-auto peer w-full" id="lastName" name="lastName" onChange={handleEditForm} type="text" value={updatedUser.lastName || ""} />
                    <label className="label-layout peer-focus:text-gray-950" htmlFor="lastName">* Last name</label>
                </div>
                <div className="relative">
                    <textarea autoComplete="address" className="input-layout peer w-full" id="address" name="address" onChange={handleEditForm} rows={2} type="text" value={updatedUser.address || ""} />
                    <label className="label-layout peer-focus:text-gray-950" htmlFor="address">* Address</label>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-5">
                    <button className="button-secondary w-full" onClick={() => setDisplayEditForm(false)}>Cancel</button>
                    <button className="button-primary w-full" onClick={handleEditUser}>Update</button>
                </div>
            </div>
        </motion.div>
    )
}