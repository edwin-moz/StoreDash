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
        <div className="flex justify-center">
            <div>
                <div>
                    <div>
                        <p>profile</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="border">
                        <div>
                            <div>
                                <p>first name:</p>
                                <p>{loggedInUser.firstName}</p>
                            </div>
                            <div>
                                <p>last name:</p>
                                <p>{loggedInUser.lastName}</p>
                            </div>
                            <div>
                                <p>address:</p>
                                <p>{loggedInUser.address}</p>
                            </div>
                            <div>
                                <p>email:</p>
                                <p>{loggedInUser.email}</p>
                            </div>
                            <div>
                                <p>username:</p>
                                <p>{loggedInUser.userName}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border">
                        <form>
                            <div>
                                <p>edit your profile</p>
                            </div>
                            <div>
                                <p>first name:</p>
                                <input className="border" defaultValue={user.firstName} name="firstName" onChange={handleEditForm} placeholder="edit new first name" type="text" />
                            </div>
                            <div>
                                <p>last name:</p>
                                <input className="border" defaultValue={user.lastName} name="lastName" onChange={handleEditForm} placeholder="edit new last name" type="text" />
                            </div>
                            <div>
                                <p>address</p>
                                <input className="border" defaultValue={user.address} name="address" onChange={handleEditForm} placeholder="edit new address" type="text" />
                            </div>
                            <div>
                                <button onClick={handleEditUser}>edit profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}