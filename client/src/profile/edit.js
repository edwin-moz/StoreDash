import { editUser } from "../managers/user"

export const EditProfile = ({ user, setUser, handletryGetLoggedInUser }) => {
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
        <div>
            <form className="flex flex-col h-full justify-between">
                <p className="text-xl font-bold font-mono">Update your information</p>
                <p className="font-normal">First name: *</p>
                <input className="bg-gray-100 border h-8 rounded text-center font-normal w-60" defaultValue={user.firstName} name="firstName" onChange={handleEditForm} placeholder="Edit your first name" type="text" />
                <p className="font-normal">Last name: *</p>
                <input className="bg-gray-100 border h-8 rounded text-center font-normal w-60" defaultValue={user.lastName} name="lastName" onChange={handleEditForm} placeholder="Edit your last name" type="text" />
                <p className="font-normal">Address: *</p>
                <textarea className="bg-gray-100 border h-24 p-1 rounded font-normal w-96" defaultValue={user.address} name="address" onChange={handleEditForm} placeholder="Edit your address" type="text" />
                <div className="flex justify-between gap-5">
                    <button className="active:scale-95 bg-gray-300 rounded-md w-full">Cancel</button>
                    <button className="active:scale-95 bg-emerald-600 h-10 rounded-md text-gray-100 w-full" onClick={handleEditUser}>Update</button>
                </div>
            </form>
        </div>

    )
}