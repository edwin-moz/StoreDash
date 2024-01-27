import { useState } from "react";
import { register } from "../../managers/authentication";
import { Link, useNavigate } from "react-router-dom";
export default function Register({ setLoggedInUser }) {
  // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // hooks
  const navigate = useNavigate();
  // handles
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      window.alert("passwords dont match")
    } else {
      const newUser = {
        firstName,
        lastName,
        userName,
        email,
        address,
        password,
      };
      register(newUser).then((data) => {
        if (data) {
          setLoggedInUser(data);
          navigate("/");
        } else {
          window.alert("registration failed")
        }
      });
    }
  };
  // component return
  return (
    <div className="bg-gray-100 flex items-center justify-center h-full">
      <form className="bg-white drop-shadow-md flex flex-col p-8 rounded-md">
        <p className="font-bold mb-4 text-2xl">Sign Up</p>
        <div className="flex flex-wrap justify-between mb-4">
          <div>
            <label className="text-gray-600 text-sm">First Name</label>
            <input className="border py-2 px-3 rounded w-full" onChange={(e) => { setFirstName(e.target.value); }} type="text" value={firstName} />
          </div>
          <div>
            <label className="text-gray-600 text-sm">Last Name</label>
            <input className="border py-2 px-3 rounded w-full" onChange={(e) => { setLastName(e.target.value); }} type="text" value={lastName} />
          </div>
        </div>
        <div className="mb-4">
          <label className="text-gray-600 text-sm">Email</label>
          <input className="border py-2 px-3 rounded w-full" onChange={(e) => { setEmail(e.target.value); }} type="email" value={email} />
        </div>
        <div className="mb-4">
          <label className="text-gray-600 text-sm">User Name</label>
          <input className="border py-2 px-3 rounded w-full" onChange={(e) => { setUserName(e.target.value); }} type="text" value={userName} />
        </div>
        <div className="mb-4">
          <label className="text-gray-600 text-sm">Address</label>
          <input className="border py-2 px-3 rounded w-full" onChange={(e) => { setAddress(e.target.value); }} type="text" value={address} />
        </div>
        <div className="flex flex-wrap gap-5 mb-4">
          <div>
            <label className="text-gray-600 text-sm">Password</label>
            <input className="border py-2 px-3 rounded w-full" onChange={(e) => {
              setPassword(e.target.value);
            }} type="password" value={password} />
          </div>
          <div>
            <label className="text-gray-600 text-sm">Confirm Password</label>
            <input className="border py-2 px-3 rounded w-full" onChange={(e) => {
              setConfirmPassword(e.target.value);
            }} type="password" value={confirmPassword} />
          </div>
        </div>
        <button className="bg-emerald-600 border duration-300 hover:bg-emerald-700 py-2 px-4 rounded text-white transition" onClick={handleSubmit} >
          Register
        </button>
        <p className="mt-4">
          Already signed up? Log in <Link className="text-blue-500" to="/login">here</Link>
        </p>
      </form>
    </div>
  );
}