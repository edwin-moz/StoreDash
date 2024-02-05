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
    <div className="flex items-center justify-center h-[100vh]">
      <form className="flex flex-col gap-3 md:bg-white md:rounded-lg p-8">
        <p className="font-bold text-2xl">Sign Up</p>
        <p><span className="text-emerald-600">*</span> indicates required field</p>
        <div className="flex flex-wrap gap-3 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-gray-950 text-sm">First Name</label>
            <input className="border px-3 py-2 rounded-md w-full" onChange={(e) => { setFirstName(e.target.value); }} type="text" value={firstName} />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="text-gray-950 text-sm">Last Name</label>
            <input className="border px-3 py-2 rounded-md w-full" onChange={(e) => { setLastName(e.target.value); }} type="text" value={lastName} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-950 text-sm">Email</label>
          <input className="border px-3 py-2 rounded-md w-full" onChange={(e) => { setEmail(e.target.value); }} type="email" value={email} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-950 text-sm">User Name</label>
          <input className="border px-3 py-2 rounded-md w-full" onChange={(e) => { setUserName(e.target.value); }} type="text" value={userName} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-950 text-sm">Address</label>
          <input className="border px-3 py-2 rounded-md w-full" onChange={(e) => { setAddress(e.target.value); }} type="text" value={address} />
        </div>
        <div className="flex flex-wrap gap-3 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-gray-950 text-sm">Password</label>
            <input className="border px-3 py-2 rounded-md w-full" onChange={(e) => {
              setPassword(e.target.value);
            }} type="password" value={password} />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="text-gray-950 text-sm">Confirm Password</label>
            <input className="border px-3 py-2  rounded-md w-full" onChange={(e) => {
              setConfirmPassword(e.target.value);
            }} type="password" value={confirmPassword} />
          </div>
        </div>
        <div className="my-3 self-end">
          <button className="active:scale-95 active:shadown-sm active:translate-y-1 bg-emerald-700 border px-4 py-2 rounded-full shadow-md text-white transition" onClick={handleSubmit}>Register</button>
        </div>
        <p>Already signed up?<Link className="hover:underline text-blue-500" to="/login"> Log in here</Link></p>
      </form>
    </div>
  );
}