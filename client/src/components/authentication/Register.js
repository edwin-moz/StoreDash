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
  const [passwordMismatch, setPasswordMismatch] = useState();
  const [registrationFailure, setRegistrationFailure] = useState(false);
  // hooks
  const navigate = useNavigate();
  // handles
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
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
          setRegistrationFailure(true);
        }
      });
    }
  };
  // component return
  return (
    <div>
      <form>
        <p>Sign Up</p>
        <lable>First Name</lable>
        <input onChange={(e) => { setFirstName(e.target.value); }} type="text" value={firstName} />

        <lable>Last Name</lable>
        <input onChange={(e) => { setLastName(e.target.value); }} type="text" value={lastName} />

        <lable>Email</lable>
        <input onChange={(e) => { setEmail(e.target.value); }} type="email" value={email} />

        <lable>User Name</lable>
        <input onChange={(e) => { setUserName(e.target.value); }} type="text" value={userName} />

        <lable>Address</lable>
        <input onChange={(e) => { setAddress(e.target.value); }} type="text" value={address} />

        <lable>Password</lable>
        <input invalid={passwordMismatch} onChange={(e) => {
          setPasswordMismatch(false);
          setPassword(e.target.value);
        }} type="password" value={password} />

        <lable> Confirm Password</lable>
        <input invalid={passwordMismatch} onChange={(e) => {
          setPasswordMismatch(false);
          setConfirmPassword(e.target.value);
        }} type="password" value={confirmPassword} />
        <p>Passwords do not match!</p>

        <p hidden={!registrationFailure}>
          Registration Failure
        </p>
        <button disabled={passwordMismatch} onClick={handleSubmit} >
          Register
        </button>
        <p>
          Already signed up? Log in <Link to="/login">here</Link>
        </p>
      </form>
    </div>
  );
}