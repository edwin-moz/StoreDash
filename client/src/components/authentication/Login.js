import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../managers/authentication";
import { motion } from "framer-motion"
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons from a library
import { GiTruck } from "react-icons/gi";

export default function Login({ setLoggedInUser }) {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hooks
  const navigate = useNavigate();
  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password).then((user) => {
      if (!user) {
        window.alert("invalid login")
      } else {
        setLoggedInUser(user);
        navigate("/");
      }
    });
  };
  // return component
  return (

    <div className="bg-gray-100 flex flex-col h-full justify-center items-center">
      <motion.div animate={{ x: 0 }} initial={{ x: -999 }} transition={{ duration: 4 }}>
        <p className="text-emerald-600"><GiTruck size={32} /></p>
      </motion.div>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 4 }} className="bg-white p-8 rounded-md shadow-md">
        <h3 className="text-2xl font-bold mb-4">StoreDash Login</h3>
        <div className="mb-4">
          <label className="text-sm text-gray-600 mb-1">Email</label>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-gray-500" />
            <input className="border rounded w-52 py-2 px-3" onChange={(e) => { setEmail(e.target.value); }} type="text" value={email} />
          </div>
        </div>
        <div className="mb-4">
          <label className="text-sm text-gray-600 mb-1">Password</label>
          <div className="flex items-center">
            <FaLock className="mr-2 text-gray-500" />
            <input className="border py-2 px-3 rounded w-52" onChange={(e) => { setPassword(e.target.value); }} type="password" value={password} />
          </div>
        </div>
        <button className="bg-emerald-600 text-white border rounded py-2 px-4 hover:bg-emerald-700 transition duration-300" onClick={handleSubmit}>
          Login
        </button>
        <p className="mt-4">
          Not signed up? Register <Link className="text-blue-500" to="/register">here</Link>
        </p>
      </motion.div>
    </div>
  );
}
