import { useEffect, useState } from "react"
import { EditProfile } from "./edit"
import { motion } from "framer-motion"
import H1 from "../components/h1"
import Divider from "../components/divider"
import Container from "../components/container"
import { useAuthContext } from "../lib/hooks"
export const Profile = () => {
  const { user } = useAuthContext()
  // state
  const [updatedUser, setUpdatedUser] = useState({})
  const [displayEditForm, setDisplayEditForm] = useState(false)
  // handle function to set the user
  const handleSetUser = () => {
    const copy = { ...user }
    copy.id = user.id
    copy.firstName = user.firstName
    copy.lastName = user.lastName
    copy.address = user.address
    setUpdatedUser(copy)
  }
  // use effect
  useEffect(() => {
    handleSetUser()
  }, [user])
  return (
    <Container>
      <H1>My Profile</H1>

      <Divider />

      {!displayEditForm && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -100 }}
          className="flex flex-col"
        >
          <p className="text-xl">Your information</p>
          <div className="grid grid-cols-[1fr,2fr] py-5 self-start">
            <p className="text-gray-500">First name:</p>
            <p className="text-gray-950 text-lg">{user.firstName}</p>
            <p className="text-gray-500">Last name:</p>
            <p className="text-gray-900 text-lg">{user.lastName}</p>
            <p className="text-gray-500">Address:</p>
            <p className="text-gray-950 text-lg">{user.address}</p>
            <p className="text-gray-500">Email:</p>
            <p className="text-gray-950 text-lg">{user.email}</p>
            <p className="text-gray-500">Username:</p>
            <p className="text-gray-950 text-lg">{user.userName}</p>
          </div>
          <button
            className="button-primary w-[10rem]"
            onClick={() => setDisplayEditForm(true)}
          >
            Edit my profile
          </button>
        </motion.div>
      )}
      {displayEditForm && (
        <EditProfile
          updatedUser={updatedUser}
          setUpdatedUser={setUpdatedUser}
          displayEditForm={displayEditForm}
          setDisplayEditForm={setDisplayEditForm}
        />
      )}
    </Container>
  )
}
