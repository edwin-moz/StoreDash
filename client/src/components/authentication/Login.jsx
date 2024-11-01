import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../managers/authentication"
import Input from "../input"
import TruckAnimation from "../truck-animation"
import Button from "../button"
import AuthForm from "../auth-form"
import AuthLayout from "./auth-layout"
import { useAuthContext } from "../../lib/hooks"

export default function Login() {
  const { handleSetUserOnLogin } = useAuthContext()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSetEmail = (value) => {
    setEmail(value)
  }
  const handleSetPassword = (value) => {
    setPassword(value)
  }
  const handleSubmit = async () => {
    const data = await login(email, password)

    // TODO setLoggedInUser should be a handle function
    if (!data) {
      window.alert("Invalid login")
    } else {
      handleSetUserOnLogin(data)

      navigate("/")
    }
  }

  return (
    <AuthLayout>
      <TruckAnimation />

      <AuthForm formHeader="Login">
        <Input inputFor="email" onChange={handleSetEmail} value={email}>
          Email
        </Input>

        <Input
          inputFor="password"
          inputType="password"
          onChange={handleSetPassword}
          value={password}
        >
          Password
        </Input>

        <Button onClick={handleSubmit}>Login</Button>

        <p>
          Not signed up?{" "}
          <Link className="hover:underline text-blue-500" to="/register">
            Register here
          </Link>
        </p>
      </AuthForm>
    </AuthLayout>
  )
}
