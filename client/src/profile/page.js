import { useEffect, useState } from "react"
import { EditProfile } from "./edit"
export const Profile = ({ loggedInUser, handletryGetLoggedInUser }) => {
    // state
    const [user, setUser] = useState({})
    const [displayEditForm, setDisplayEditForm] = useState(false)
    // handle function to set the user
    const handleSetUser = () => {
        const copy = { ...user }
        copy.id = loggedInUser.id
        copy.firstName = loggedInUser.firstName
        copy.lastName = loggedInUser.lastName
        copy.address = loggedInUser.address
        setUser(copy)
    }
    // use effect
    useEffect(() => {
        handleSetUser()
    }, [loggedInUser])
    return (
        <div className="flex flex-col">
            <div className="ml-10 my-10">
                <p className="text-3xl">My Profile</p>
            </div>
            <div className="flex flex-wrap justify-between mx-10">
                <div className="flex flex-col">
                    <p className="text-xl">Your information</p>
                    <p className="my-3 text-gray-500">First name: <span className="text-gray-950 text-lg">{loggedInUser.firstName}</span></p>
                    <p className="text-gray-500">Last name: <span className="text-gray-900 text-lg">{loggedInUser.lastName}</span></p>
                    <p className="my-3 text-gray-500">Address: <span className="text-gray-950 text-lg">{loggedInUser.address}</span></p>
                    <p className="text-gray-500">Email: <span className="text-gray-950 text-lg">{loggedInUser.email}</span></p>
                    <p className="my-3 text-gray-500">Username: <span className="text-gray-950 text-lg">{loggedInUser.userName}</span></p>
                    <button className="active:scale-95 bg-emerald-600 h-10 hover:bg-emerald-700 rounded-md text-gray-100" onClick={() => setDisplayEditForm(true)}>Edit my profile</button>
                </div>
                {displayEditForm && (
                    <EditProfile user={user} setUser={setUser} handletryGetLoggedInUser={handletryGetLoggedInUser} setDisplayEditForm={setDisplayEditForm} />
                )}
            </div>
        </div>
    )
}