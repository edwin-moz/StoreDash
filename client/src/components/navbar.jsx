import { Link, useNavigate } from "react-router-dom"
import { logout } from "../managers/authentication"
import { motion } from "framer-motion"
import { links } from "../lib/data"
import { useAuthContext } from "../lib/hooks"

export const Navbar = () => {
  const { user, handleSetUserOnLogout } = useAuthContext()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()

    handleSetUserOnLogout(null)

    navigate("/login")
  }
  return (
    <nav className="bg-white border-b-2">
      <ul className="flex flex-wrap gap-5 min-h-[5rem] items-center justify-around p-3">
        <LogoUrl />
        <div className="flex flex-grow flex-wrap gap-5 items-center justify-around">
          {links.map((link, index) => (
            <motion.li animate={{ y: 0 }} initial={{ y: -100 }} key={index}>
              <Link to={`${link.to}`}>
                <p className="text-gray-950 tracking-widest">{link.name}</p>
              </Link>
            </motion.li>
          ))}
          {user?.roles.includes("Admin") && <AdminUrl />}
          <LogoutButton onClick={handleLogout} />
        </div>
      </ul>
    </nav>
  )
}

function AdminUrl() {
  return (
    <motion.li
      animate={{ y: 0 }}
      className="flex justify-end"
      initial={{ y: -100 }}
    >
      <Link to="admin">
        <p className="text-gray-950 tracking-widest">Admin</p>
      </Link>
    </motion.li>
  )
}

function LogoUrl() {
  return (
    <Link to="/">
      <motion.li
        animate={{ x: 0 }}
        initial={{ x: -200 }}
        className="flex items-center"
      >
        <img className="h-[5rem]" src="./Store.png" alt="" />
        <p className="font-bold text-emerald-600 text-2xl tracking-widest">
          STOREDASH
        </p>
      </motion.li>
    </Link>
  )
}

function LogoutButton({ onClick }) {
  return (
    <motion.li
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <button className="button-secondary" onClick={onClick}>
        Logout
      </button>
    </motion.li>
  )
}
