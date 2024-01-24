import { Link } from "react-router-dom"
import { logout } from "../managers/authentication"

const links = [
    {
        name: "Distributors",
        to: "/"
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
                        <li className="flex items-center">
                            <img className="h-20" src="./StoreDashLogo.png" alt="" />
                            <p className="font-light text-xl tracking-widest text-emerald-600">STOREDASH</p>
                        </li>
                    </Link>
                    {links.map((link, index) => (
                        <li key={index}>
                            <p className="text-gray-900">
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