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
        <main className="flex flex-col h-full w-full">
            <div className="flex flex-col mx-40 my-10 h-full">
                <section className="mb-10">
                    <div>
                        <p className="text-3xl">My Profile</p>
                    </div>
                </section>
                <section className="flex justify-between h-full">
                    <div>
                        <div className="flex flex-col h-full justify-between">
                            <p className="text-xl font-bold font-mono">Your information</p>
                            <p className="font-normal text-gray-500">First name: <span className="font-medium text-gray-900 text-lg">{loggedInUser.firstName}</span></p>
                            <p className="font-normal text-gray-500">Last name: <span className="font-medium text-gray-900 text-lg">{loggedInUser.lastName}</span></p>
                            <p className="font-normal text-gray-500">Address: <span className="font-medium text-gray-900 text-lg">{loggedInUser.address}</span></p>
                            <p className="font-normal text-gray-500">Email: <span className="font-medium text-gray-900 text-lg">{loggedInUser.email}</span></p>
                            <p className="font-normal text-gray-500">Username: <span className="font-medium text-gray-900 text-lg">{loggedInUser.userName}</span></p>
                            <button className="active:scale-95 bg-emerald-600 h-10 rounded-md text-gray-100 w-36" onClick={() => setDisplayEditForm(true)}>Edit my profile</button>
                        </div>
                    </div>
                    {displayEditForm && (
                        <EditProfile user={user} setUser={setUser} handletryGetLoggedInUser={handletryGetLoggedInUser} />
                    )}
                </section>
            </div>
        </main>
    )
}