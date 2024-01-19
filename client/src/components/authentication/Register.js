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
    <div>
      <form className="flex flex-col">
        <p>Sign Up</p>
        <lable>First Name</lable>
        <input className="border" onChange={(e) => { setFirstName(e.target.value); }} type="text" value={firstName} />

        <lable>Last Name</lable>
        <input className="border" onChange={(e) => { setLastName(e.target.value); }} type="text" value={lastName} />

        <lable>Email</lable>
        <input className="border" onChange={(e) => { setEmail(e.target.value); }} type="email" value={email} />

        <lable>User Name</lable>
        <input className="border" onChange={(e) => { setUserName(e.target.value); }} type="text" value={userName} />

        <lable>Address</lable>
        <input className="border" onChange={(e) => { setAddress(e.target.value); }} type="text" value={address} />

        <lable>Password</lable>
        <input className="border" onChange={(e) => {
          setPassword(e.target.value);
        }} type="password" value={password} />

        <lable> Confirm Password</lable>
        <input className="border" onChange={(e) => {
          setConfirmPassword(e.target.value);
        }} type="password" value={confirmPassword} />

        <button onClick={handleSubmit} >
          Register
        </button>

        <p>
          Already signed up? Log in <Link to="/login">here</Link>
        </p>

      </form>
    </div>
  );
}