import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../managers/authentication";

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
    <div>
      <h3>Login</h3>

      <label>Email</label>
      <input className="border" onChange={(e) => { setEmail(e.target.value); }} type="text" value={email} />

      <label>Password</label>
      <input className="border" onChange={(e) => { setPassword(e.target.value); }} type="password" value={password} />

      <button className="border" onClick={handleSubmit}>
        Login
      </button>
      <p>
        Not signed up? Register <Link to="/register">here</Link>
      </p>
    </div>
  );
}
