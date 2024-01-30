import { Link, useNavigate } from "react-router-dom"
import { logout } from "../managers/authentication"
import { motion } from "framer-motion"
// nav links
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
    }
]
export const Header = ({ loggedInUser, setLoggedInUser }) => {
    // hooks
    const navigate = useNavigate()
    // handle function to log out
    const handleLogout = () => {
        logout().then(() => {
            setLoggedInUser(null)
            navigate("/login")
        })
    }
    return (
        <header className="bg-white relative">
            <nav className="border-b-2">
                <ul className="flex h-[5rem] items-center justify-around">
                    <Link to="/">
                        <motion.li animate={{ x: 0 }} initial={{ x: -200 }} className="flex items-center">
                            <img className="h-[5rem]" src="./Store.png" alt="" />
                            <p className="text-emerald-600 text-2xl tracking-widest">STOREDASH</p>
                        </motion.li>
                    </Link>
                    {links.map((link, index) => (
                        <motion.li animate={{ y: 0 }} initial={{ y: -100 }} key={index}>
                            <Link to={`${link.to}`}>
                                <p className="text-gray-950 tracking-widest">{link.name}</p>
                            </Link>
                        </motion.li>
                    ))}
                    {loggedInUser?.roles.includes("Admin") && (
                        <motion.li animate={{ y: 0 }} initial={{ y: -100 }}>
                            <Link to="admin">
                                <p className="text-gray-950 tracking-widest">Admin</p>
                            </Link>
                        </motion.li>
                    )}
                    <motion.li animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <button className="bg-gray-300 px-3 py-1 rounded-full" onClick={handleLogout}>Logout</button>
                    </motion.li>
                </ul>
            </nav>
        </header>
    )
}