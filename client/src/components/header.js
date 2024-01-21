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
        <header>
            <nav>
                <ul className="flex">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={`${link.to}`}>{link.name}</Link>
                        </li>
                    ))}
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}