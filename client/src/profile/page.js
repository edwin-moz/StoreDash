import { useEffect, useState } from "react"
import { EditProfile } from "./edit"
import { motion } from "framer-motion"
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
        <div className="flex flex-col gap-10 min-h-[87vh] p-10">
            <motion.p animate={{ x: 0 }} initial={{ x: -180 }} className="font-bold text-3xl text-gray-950 tracking-wide">My Profile</motion.p>
            {!displayEditForm && (
                <motion.div animate={{ x: 0 }} initial={{ x: -100 }} className="flex flex-col">
                    <p className="text-xl">Your information</p>
                    <div className="grid grid-cols-[1fr,2fr] py-5 self-start">
                        <p className="text-gray-500">First name:</p>
                        <p className="text-gray-950 text-lg">{loggedInUser.firstName}</p>
                        <p className="text-gray-500">Last name:</p>
                        <p className="text-gray-900 text-lg">{loggedInUser.lastName}</p>
                        <p className="text-gray-500">Address:</p>
                        <p className="text-gray-950 text-lg">{loggedInUser.address}</p>
                        <p className="text-gray-500">Email:</p>
                        <p className="text-gray-950 text-lg">{loggedInUser.email}</p>
                        <p className="text-gray-500">Username:</p>
                        <p className="text-gray-950 text-lg">{loggedInUser.userName}</p>
                    </div>
                    <button className="active:scale-95 active:translate-y-1 bg-emerald-700 font-semibold h-[3rem] md:w-[14rem] px-5 rounded-full shadow-md shadow-black/50 text-white tracking-wider transition w-full" onClick={() => setDisplayEditForm(true)}>Edit my profile</button>
                </motion.div>
            )}
            {displayEditForm && (
                <EditProfile user={user} setUser={setUser} handletryGetLoggedInUser={handletryGetLoggedInUser} displayEditForm={displayEditForm} setDisplayEditForm={setDisplayEditForm} />
            )}
        </div>
    )
}