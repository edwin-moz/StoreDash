import { useEffect, useState } from "react"
import { editUser } from "../managers/user"
export const Profile = ({ loggedInUser, handletryGetLoggedInUser }) => {
    // state
    const [user, setUser] = useState({})
    // handle function to set the user
    const handleSetUser = () => {
        const copy = { ...user }
        copy.id = loggedInUser.id
        copy.firstName = loggedInUser.firstName
        copy.lastName = loggedInUser.lastName
        copy.address = loggedInUser.address
        setUser(copy)
    }
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
    // use effect
    useEffect(() => {
        handleSetUser()
    }, [loggedInUser])
    return (
        <div className="bg-gray-100 w-screen">
            <div className="flex flex-col p-10">
                <div className="pb-10">
                    <div>
                        <p className="text-4xl">Profile</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div>
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex">
                                <p className="text-gray-500">First name: <span className="text-lg text-gray-900">{loggedInUser.firstName}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-500">Last name: <span className="text-lg text-gray-900">{loggedInUser.lastName}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-500">Address: <span className="text-lg text-gray-900">{loggedInUser.address}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-500">Email: <span className="text-lg text-gray-900">{loggedInUser.email}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-500">Username: <span className="text-lg text-gray-900">{loggedInUser.userName}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <form className="bg-white border p-5">
                            <div>
                                <p className="text-xl">Update your information</p>
                            </div>
                            <div>
                                <p>First name:</p>
                                <input className="border h-8 rounded text-center w-60" defaultValue={user.firstName} name="firstName" onChange={handleEditForm} placeholder="Edit your first name" type="text" />
                            </div>
                            <div>
                                <p>Last name:</p>
                                <input className="border h-8 rounded text-center w-60" defaultValue={user.lastName} name="lastName" onChange={handleEditForm} placeholder="Edit your last name" type="text" />
                            </div>
                            <div>
                                <p>Address:</p>
                                <textarea className="border h-24 p-1 rounded w-96" defaultValue={user.address} name="address" onChange={handleEditForm} placeholder="Edit your address" type="text" />
                            </div>
                            <div>
                                <button className="active:scale-95 bg-emerald-600 px-3 py-1 rounded-md text-gray-100" onClick={handleEditUser}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}