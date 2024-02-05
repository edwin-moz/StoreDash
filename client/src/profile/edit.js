import { editUser } from "../managers/user"
import { motion } from "framer-motion"

export const EditProfile = ({ user, setUser, handletryGetLoggedInUser, setDisplayEditForm }) => {

    // handle function for edit form
    const handleEditForm = (event) => {
        const name = event.target.name
        const value = event.target.value
        const copy = { ...user }
        if (name === "firstName") {
            copy.firstName = value
            setUser(copy)
        } else if (name === "lastName") {
            copy.lastName = value
            setUser(copy)
        } else if (name === "address") {
            copy.address = value
            setUser(copy)
        }
    }
    // handle function to edit user
    const handleEditUser = () => {
        editUser(user).then(() => {
            handletryGetLoggedInUser()
            setDisplayEditForm(false)
        })
    }
    return (
        <motion.div animate={{ x: 0 }} initial={{ x: -100 }} className="self-start">
            <div className="bg-white border flex flex-col gap-5 p-5 rounded">
                <div className="relative">
                    <input className="input-layout peer" name="firstName" onChange={handleEditForm} type="text" value={user.firstName || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* First name</label>
                </div>
                <div className="relative">
                    <input className="input-layout peer" name="lastName" onChange={handleEditForm} type="text" value={user.lastName || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Last name</label>
                </div>
                <div className="relative">
                    <textarea className="input-layout peer w-full" name="address" onChange={handleEditForm} rows={2} type="text" value={user.address || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Address</label>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-5">
                    <button className="active:scale-95 active:translate-y-1 bg-gray-500 font-semibold h-[3rem] md:w-[8rem] px-5 rounded-full shadow-md shadow-black/50 text-white tracking-wider transition w-full" onClick={() => setDisplayEditForm(false)}>Cancel</button>
                    <button className="button-primary w-full" onClick={handleEditUser}>Update</button>
                </div>
            </div>
        </motion.div>
    )
}