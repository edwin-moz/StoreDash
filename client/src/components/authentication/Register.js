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
  const handleSubmit = (e) => {
    e.preventDefault();
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
      register(newUser).then((user) => {
        if (user) {
          setLoggedInUser(user);
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
      <form className="bg-white flex flex-col p-8 rounded-md shadow-md">
        <p className="text-2xl font-bold mb-4">Sign Up</p>
        <div>
          <lable className="text-sm text-gray-600 mb-1">First Name</lable>
          <input className="border py-2 px-3 rounded w-full" onChange={(e) => { setFirstName(e.target.value); }} type="text" value={firstName} />
        </div>
        <div className="mb-4">
          <lable className="text-sm text-gray-600 mb-1">Last Name</lable>
          <input className="border py-2 px-3 rounded w-full" onChange={(e) => { setLastName(e.target.value); }} type="text" value={lastName} />
        </div>
        <div className="mb-4">
          <lable className="text-sm text-gray-600 mb-1">Email</lable>
          <input className="border rounded w-full py-2 px-3" onChange={(e) => { setEmail(e.target.value); }} type="email" value={email} />
        </div>
        <div className="mb-4">
          <lable className="text-sm text-gray-600 mb-1">User Name</lable>
          <input className="border rounded w-full py-2 px-3" onChange={(e) => { setUserName(e.target.value); }} type="text" value={userName} />
        </div>
        <div className="mb-4">
          <lable className="text-sm text-gray-600 mb-1">Address</lable>
          <input className="border rounded w-full py-2 px-3" onChange={(e) => { setAddress(e.target.value); }} type="text" value={address} />
        </div>
        <div className="mb-4">
          <lable className="text-sm text-gray-600 mb-1">Password</lable>
          <input className="border rounded w-full py-2 px-3" onChange={(e) => {
            setPassword(e.target.value);
          }} type="password" value={password} />
        </div>
        <div className="mb-4">
          <lable className="text-sm text-gray-600 mb-1"> Confirm Password</lable>
          <input className="border rounded w-full py-2 px-3" onChange={(e) => {
            setConfirmPassword(e.target.value);
          }} type="password" value={confirmPassword} />
        </div>
        <button className="bg-blue-500 text-white border rounded py-2 px-4 hover:bg-blue-600 transition duration-300" onClick={handleSubmit} >
          Register
        </button>
        <p className="mt-4">
          Already signed up? Log in <Link to="/login">here</Link>
        </p>
      </form>
    </div>
  );
}