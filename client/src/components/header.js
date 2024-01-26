import { Link } from "react-router-dom"
import { logout } from "../managers/authentication"
import { motion } from "framer-motion"

const links = [
    {
        name: "Distributors",
        to: "/",
    },
    {
        name: "Orders",
        to: "/orders"
    },
    {
        name: "Stores",
        to: "/stores"
    },
    {
        name: "Profile",
        to: "/profile"
    },
]
export const Header = ({ setLoggedInUser }) => {
    // handle function to log out
    const handleLogout = () => {
        logout().then(() => {
            setLoggedInUser(null)
        })
    }
    return (
        <header className="font-sans font-semibold">
            <nav className="border-b-2">
                <ul className="flex h-[5rem] items-center justify-around">
                    <Link to="/">
                        <motion.li animate={{ x: 0 }} initial={{x:-200}} className="flex items-center">
                            <img className="h-20" src="./Store.png" alt="" />
                            <p className="font-medium text-xl tracking-widest text-emerald-600">STOREDASH</p>
                        </motion.li>
                    </Link>
                    {links.map((link, index) => (
                        <li key={index}>
                            <p className="text-gray-950">
                                <Link to={`${link.to}`}>{link.name}</Link>
                            </p>
                        </li>
                    ))}
                    <li className="bg-gray-300 rounded-full px-3 py-1">
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header >
    )
}