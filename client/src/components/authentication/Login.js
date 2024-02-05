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
    <div className="flex flex-col h-[100vh] md:items-center md:justify-center">
      <motion.div animate={{ x: 0 }} initial={{ x: -999 }} transition={{ duration: 4 }}>
        <p className="hidden md:block text-emerald-600">
          <GiTruck size={36} />
        </p>
      </motion.div>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 4 }} className="flex flex-col gap-3 md:bg-white md:border md:rounded-lg p-8 md:shadow-md">
        {/* <p className="text-2xl">StoreDash Login</p> */}
        <p><span className="text-emerald-600">*</span> indicates required field</p>
        <div className="flex flex-col">
          <label className="text-gray-950 text-sm">Email</label>
          <div className="flex flex-wrap gap-3 items-center md:flex-nowrap">
            <FaEnvelope className="text-gray-500" />
            <input className="border px-3 py-2 rounded-lg w-full" onChange={(e) => { setEmail(e.target.value); }} type="text" value={email} />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-950 text-sm">Password</label>
          <div className="flex flex-wrap gap-3 items-center md:flex-nowrap">
            <FaLock className="text-gray-500" />
            <input className="border px-3 py-2 rounded-lg w-full" onChange={(e) => { setPassword(e.target.value); }} type="password" value={password} />
          </div>
        </div>
        <div className="my-3 self-end">
          <button className="button-primary" onClick={handleSubmit}>Login</button>
        </div>
        <p>Not signed up? <Link className="hover:underline text-blue-500" to="/register">Register here</Link></p>
      </motion.div>
    </div>
  );
}
