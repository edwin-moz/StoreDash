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
        })
    }
    return (
        <motion.div animate={{ x: 0 }} className="flex flex-col w-[25rem]" initial={{ x: 300 }}>
            <p className="text-xl">Update your information</p>
            <p className="mt-3">First name: *</p>
            <input className="border h-10 rounded text-center" defaultValue={user.firstName} name="firstName" onChange={handleEditForm} placeholder="Edit your first name" type="text" />
            <p className="mt-3">Last name: *</p>
            <input className="border h-10 rounded text-center" defaultValue={user.lastName} name="lastName" onChange={handleEditForm} placeholder="Edit your last name" type="text" />
            <p className="mt-3">Address: *</p>
            <textarea className="border p-1 rounded" defaultValue={user.address} name="address" onChange={handleEditForm} placeholder="Edit your address" rows={2} />
            <div className="flex gap-5 mt-3">
                <button className="active:scale-95 bg-gray-300 h-10 rounded-md w-full" onClick={() => setDisplayEditForm(false)}>Cancel</button>
                <button className="active:scale-95 bg-emerald-600 h-10 hover:bg-emerald-700 rounded-md text-gray-100 w-full" onClick={handleEditUser}>Update</button>
            </div>
        </motion.div>
    )
}