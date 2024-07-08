import { useState } from "react"
import { register } from "../../managers/authentication"
import { Link, useNavigate } from "react-router-dom"
import Input from "../input"
import Button from "../button"
import AuthForm from "../auth-form"

export default function Register({ setLoggedInUser }) {
  // state
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")
  // hooks
  const navigate = useNavigate()
  // handles
  const handleSetFirstName = (value) => setFirstName(value)
  const handleSetLastName = (value) => setLastName(value)
  const handleSetUserName = (value) => setUserName(value)
  const handleSetEmail = (value) => setEmail(value)
  const handleSetAddress = (value) => setAddress(value)
  const handleSetPassword = (value) => setPassword(value)
  const handleSetConfirmedPassword = (value) => setConfirmedPassword(value)
  const handleSubmit = () => {
    if (password !== confirmedPassword) {
      window.alert("passwords dont match")
    } else {
      const newUser = {
        firstName,
        lastName,
        userName,
        email,
        address,
        password,
      }
      register(newUser).then((data) => {
        if (data) {
          setLoggedInUser(data)
          navigate("/")
        } else {
          window.alert("registration failed")
        }
      })
    }
  }
  // component return
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <AuthForm formHeader="Register">
        <div className="flex flex-wrap gap-3 md:grid md:grid-cols-2">
          <Input onChange={handleSetFirstName} value={firstName}>First name</Input>
          <Input onChange={handleSetLastName} value={lastName}>Last name</Input>
        </div>

        <Input onChange={handleSetEmail} value={email}>Email</Input>
        <Input onChange={handleSetUserName} value={userName}>Username</Input>
        <Input onChange={handleSetAddress} value={address}>Address</Input>

        <div className="flex flex-wrap gap-3 md:grid md:grid-cols-2">
          <Input onChange={handleSetPassword} value={password}>Password</Input>
          <Input inputFor="new-password" onChange={handleSetConfirmedPassword} value={confirmedPassword}>Password</Input>
        </div>

        <Button onClick={handleSubmit}>Register</Button>

        <p>Already signed up? <Link className="hover:underline text-blue-500" to="/login">Log in here</Link></p>
      </AuthForm>
    </div>
  )
}