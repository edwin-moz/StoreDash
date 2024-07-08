import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../managers/authentication"
import Input from "../input"
import TruckAnimation from "../truck-animation"
import Button from "../button"
import AuthForm from "../auth-form"

export default function Login({ setLoggedInUser }) {
  // state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // hooks
  const navigate = useNavigate()
  // handlers
  const handleSetEmail = (value) => setEmail(value)
  const handleSetPassword = (value) => setPassword(value)
  const handleSubmit = () => {
    login(email, password).then((data) => {
      if (!data) {
        window.alert("invalid login")
      } else {
        setLoggedInUser(data)
        navigate("/")
      }
    })
  }
  // return component
  return (
    <div className="flex flex-col h-[100vh] md:items-center justify-center">
      <TruckAnimation />

      <AuthForm formHeader="Login">
        <Input inputFor="email" onChange={handleSetEmail} value={email}>Email</Input>

        <Input inputFor="password" onChange={handleSetPassword} value={password}>Password</Input>

        <Button onClick={handleSubmit}>Login</Button>

        <p>Not signed up? <Link className="hover:underline text-blue-500" to="/register">Register here</Link></p>
      </AuthForm>
    </div>
  )
}
