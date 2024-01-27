import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../managers/authentication"
import { motion } from "framer-motion"
import { FaEnvelope, FaLock } from "react-icons/fa"
import { GiTruck } from "react-icons/gi"

export default function Login({ setLoggedInUser }) {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hooks
  const navigate = useNavigate();
  // handlers
  const handleSubmit = () => {
    login(email, password).then((data) => {
      if (!data) {
        window.alert("invalid login")
      } else {
        setLoggedInUser(data);
        navigate("/");
      }
    });
  };
  // return component
  return (
    <div className="bg-gray-100 flex flex-col h-full items-center justify-center">
      <motion.div animate={{ x: 0 }} initial={{ x: -999 }} transition={{ duration: 4 }}>
        <p className="text-emerald-600"><GiTruck size={32} /></p>
      </motion.div>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 4 }} className="bg-white p-8 rounded-md shadow-md">
        <p className="mb-4 text-2xl">StoreDash Login</p>
        <div className="mb-4">
          <label className="mb-1 text-gray-600 text-sm">Email</label>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-gray-500" />
            <input className="border py-2 px-3 rounded w-52" onChange={(e) => { setEmail(e.target.value); }} type="text" value={email} />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-1 text-gray-600 text-sm">Password</label>
          <div className="flex items-center">
            <FaLock className="mr-2 text-gray-500" />
            <input className="border rounded py-2 px-3 w-52" onChange={(e) => { setPassword(e.target.value); }} type="password" value={password} />
          </div>
        </div>
        <button className="bg-emerald-600 duration-300 hover:bg-emerald-700 border py-2 px-4 rounded text-white transition" onClick={handleSubmit}>
          Login
        </button>
        <p className="mt-4">
          Not signed up? Register <Link className="text-blue-500" to="/register">here</Link>
        </p>
      </motion.div>
    </div>
  );
}
