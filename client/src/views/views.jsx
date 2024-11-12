import { Outlet, Route, Routes } from "react-router-dom"
import Register from "../components/authentication/Register"
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
import { Distributors } from "../distributors/distributors"
import DistributorContextProvider from "../contexts/distributor-context-provider"

export default function Views() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Navbar />

                        <AuthorizedRoute>
                            <Outlet />
                        </AuthorizedRoute>

                        <Footer />

                        <ChatBar />
                    </>
                }
            >
                <Route index element={<Distributors />} />

                <Route path=":distributorId" element={<NewOrder />} />

                <Route path="orders" element={<Orders />} />

                <Route path="stores">
                    <Route index element={<Stores />} />

                    <Route path="new" element={<AddStore />} />
                </Route>

                <Route path="profile" element={<Profile />} />

                <Route path="admin" element={<Admin />} />
            </Route>

            <Route path="register" element={<Register />} />

            <Route path="login" element={<Login />} />
        </Routes>
    )
}
