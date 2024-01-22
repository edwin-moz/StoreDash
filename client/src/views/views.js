import { Outlet, Route, Routes } from "react-router-dom"
import Register, { } from "../components/authentication/Register"
import { Distributors } from "../distributors/page"
import { AuthorizedRoute } from "../components/authentication/AuthorizedRoute"
import Login from "../components/authentication/Login"
import { Header } from "../components/header"
import { NewOrder } from "../orders/new"
import { Orders } from "../orders/page"
import { Stores } from "../stores/page"
import { NewStore } from "../stores/new"
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
                    <Route index element={
                        <AuthorizedRoute loggedInUser={loggedInUser}>
                            <Orders loggedInUser={loggedInUser} />
                        </AuthorizedRoute>
                    } />
                    <Route path=":distributorId" element={
                        <AuthorizedRoute loggedInUser={loggedInUser}>
                            <NewOrder loggedInUser={loggedInUser} />
                        </AuthorizedRoute>
                    } />
                </Route>
                <Route path="stores">
                    <Route index element={
                        <AuthorizedRoute loggedInUser={loggedInUser}>
                            <Stores loggedInUser={loggedInUser} />
                        </AuthorizedRoute>
                    } />
                    <Route path="new" element={
                        <AuthorizedRoute loggedInUser={loggedInUser}>
                            <NewStore loggedInUser={loggedInUser} />
                        </AuthorizedRoute>
                    } />
                </Route>
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        </Routes>
    )
}