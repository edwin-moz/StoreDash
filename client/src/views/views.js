import { Route, Routes } from "react-router-dom"
import Register, { } from "../components/authentication/Register"
export const Views = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    )
}