import { Outlet, Route, Routes } from "react-router-dom"
import Register, { } from "../components/authentication/Register"
import { Distributors } from "../distributors/page"
import { AuthorizedRoute } from "../components/authentication/AuthorizedRoute"
import Login from "../components/authentication/Login"
import { Navbar } from "../components/navbar"
import { NewOrder } from "../orders/new"
import { Orders } from "../orders/page"
import { Stores } from "../stores/page"
import { AddStore } from "../stores/add"
import { Profile } from "../profile/page"
import { Footer } from "../components/footer"
import { Admin } from "../admin/page"
import { ChatBar } from "../components/chatbar"
export const Views = ({ loggedInUser, setLoggedInUser, handletryGetLoggedInUser }) => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
                    <Outlet />
                    <Footer loggedInUser={loggedInUser} />
                    <ChatBar loggedInUser={loggedInUser} />
                </>
            }>
                <Route index element={
                    <AuthorizedRoute loggedInUser={loggedInUser}>
                        <Distributors />
                    </AuthorizedRoute>
                } />
                <Route path=":distributorId" element={
                    <AuthorizedRoute loggedInUser={loggedInUser}>
                        <NewOrder loggedInUser={loggedInUser} />
                    </AuthorizedRoute>
                } />
                <Route path="orders">
                    <Route index element={
                        <AuthorizedRoute loggedInUser={loggedInUser}>
                            <Orders loggedInUser={loggedInUser} />
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
                            <AddStore loggedInUser={loggedInUser} />
                        </AuthorizedRoute>
                    } />
                </Route>
                <Route path="profile">
                    <Route index element={
                        <AuthorizedRoute loggedInUser={loggedInUser}>
                            <Profile loggedInUser={loggedInUser} handletryGetLoggedInUser={handletryGetLoggedInUser} />
                        </AuthorizedRoute>
                    } />
                </Route>
                <Route path="admin">
                    <Route index element={
                        <AuthorizedRoute loggedInUser={loggedInUser} roles={["Admin"]}>
                            <Admin />
                        </AuthorizedRoute>
                    } />
                </Route>
            </Route>
            <Route path="register" element={<Register setLoggedInUser={setLoggedInUser} />} />
            <Route path="login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        </Routes>
    )
}