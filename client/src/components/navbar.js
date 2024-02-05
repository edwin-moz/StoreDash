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
export const Navbar = ({ loggedInUser, setLoggedInUser }) => {
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
        <nav className="bg-white border-b-2">
            <ul className="flex flex-wrap gap-5 min-h-[5rem] items-center justify-around p-3">
                <Link to="/">
                    <motion.li animate={{ x: 0 }} initial={{ x: -200 }} className="flex items-center">
                        <img className="h-[5rem]" src="./Store.png" alt="" />
                        <p className="font-bold text-emerald-600 text-2xl tracking-widest">STOREDASH</p>
                    </motion.li>
                </Link>
                <div className="flex flex-grow flex-wrap gap-5 items-center justify-around">
                    {links.map((link, index) => (
                        <motion.li animate={{ y: 0 }} initial={{ y: -100 }} key={index}>
                            <Link to={`${link.to}`}>
                                <p className="text-gray-950 tracking-widest">{link.name}</p>
                            </Link>
                        </motion.li>
                    ))}
                    {loggedInUser?.roles.includes("Admin") && (
                        <motion.li animate={{ y: 0 }} className="flex justify-end" initial={{ y: -100 }}>
                            <Link to="admin">
                                <p className="text-gray-950 tracking-widest">Admin</p>
                            </Link>
                        </motion.li>
                    )}
                    <motion.li animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <button className="button-secondary" onClick={handleLogout}>Logout</button>
                    </motion.li>
                </div>
            </ul>
        </nav>
    )
}