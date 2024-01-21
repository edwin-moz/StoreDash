import { Outlet, Route, Routes } from "react-router-dom"
import Register, { } from "../components/authentication/Register"
import { Distributors } from "../distributors/page"
import { AuthorizedRoute } from "../components/authentication/AuthorizedRoute"
import Login from "../components/authentication/Login"
import { Header } from "../components/header"
import { NewOrder } from "../orders/new"
export const Views = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Header setLoggedInUser={setLoggedInUser} />
                    <Outlet />
                </>
            }>
                <Route index element={
                    <AuthorizedRoute loggedInUser={loggedInUser}>
                        <Distributors />
                    </AuthorizedRoute>
                } />
                <Route path="orders">
                    <Route path=":distributorId" element={<NewOrder />} />
                </Route>
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        </Routes>
    )
}