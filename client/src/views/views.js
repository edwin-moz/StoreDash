import { Route, Routes } from "react-router-dom"
import Register, { } from "../components/authentication/Register"
import { Distributors } from "../distributors/page"
import { AuthorizedRoute } from "../components/authentication/AuthorizedRoute"
import Login from "../components/authentication/Login"
export const Views = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <Routes>
            <Route path="/">
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login setLoggedInUser={setLoggedInUser} />} />
                <Route index element={
                    <AuthorizedRoute loggedInUser={loggedInUser}>
                        <Distributors />
                    </AuthorizedRoute>
                } />
            </Route>
        </Routes>
    )
}