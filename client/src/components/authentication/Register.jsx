import { useState } from "react"
import { register } from "../../managers/authentication"
import { Link, useNavigate } from "react-router-dom"
import Input from "../input"
import Button from "../button"
import AuthForm from "../auth-form"
import AuthLayout from "./auth-layout"
import { useAuthContext } from "../../lib/hooks"

export default function Register() {
    const { handleSetUserOnLogin } = useAuthContext()
    // state
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    // derived state
    const passwordsMatch = password === confirmedPassword
    const newUser = {
        firstName,
        lastName,
        userName,
        email,
        address,
        password,
    }
    // hooks
    const navigate = useNavigate()
    // handles
    const handleSetFirstName = (event) => setFirstName(event.target.value)
    const handleSetLastName = (event) => setLastName(event.target.value)
    const handleSetUserName = (event) => setUserName(event.target.value)
    const handleSetEmail = (event) => setEmail(event.target.value)
    const handleSetAddress = (event) => setAddress(event.target.value)
    const handleSetPassword = (event) => setPassword(event.target.value)
    const handleSetConfirmedPassword = (event) => setConfirmedPassword(event.target.value)

    const handleSubmit = () => {
        if (!passwordsMatch) {
            window.alert("passwords dont match")
        } else {
            register(newUser).then((data) => {
                if (data) {
                    // TODO this needs to be a handler function!!!
                    handleSetUserOnLogin(data)

                    navigate("/")
                } else {
                    window.alert("registration failed")
                }
            })
        }
    }

    return (
        <AuthLayout>
            <AuthForm formHeader="Register">
                <div className="flex flex-wrap gap-3 md:grid md:grid-cols-2">
                    <Input onChange={handleSetFirstName} value={firstName}>
                        First name
                    </Input>
                    <Input onChange={handleSetLastName} value={lastName}>
                        Last name
                    </Input>
                </div>

                <Input inputType="email" onChange={handleSetEmail} value={email}>
                    Email
                </Input>
                <Input onChange={handleSetUserName} value={userName}>
                    Username
                </Input>
                <Input onChange={handleSetAddress} value={address}>
                    Address
                </Input>

                <div className="flex flex-wrap gap-3 md:grid md:grid-cols-2">
                    <Input
                        inputType="password"
                        onChange={handleSetPassword}
                        value={password}
                    >
                        Password
                    </Input>
                    <Input
                        inputFor="new-password"
                        inputType="password"
                        onChange={handleSetConfirmedPassword}
                        value={confirmedPassword}
                    >
                        Password
                    </Input>
                </div>

                <Button onClick={handleSubmit}>Register</Button>

                <p>
                    Already signed up?{" "}
                    <Link className="hover:underline text-blue-500" to="/login">
                        Log in here
                    </Link>
                </p>
            </AuthForm>
        </AuthLayout>
    )
}
