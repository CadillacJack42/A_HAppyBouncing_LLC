import React, { useState } from "react";
// import "../css/Auth.css";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {};

  return (
    <div className="auth-form-container">
      <p className="auth-form-title">Register</p>
      <form className="auth-form" onSubmit={handleRegister}>
        <label className="auth-form-input-label">
          Email
          <input
            className="auth-form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label className="auth-form-input-label">
          Password
          <input
            className="auth-form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
          ></input>
        </label>
        <label className="auth-form-input-label">
          First Name
          <input
            className="auth-form-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <label className="auth-form-input-label">
          Last Name
          <input
            className="auth-form-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <label className="auth-form-input-label">
          Phone
          <input
            className="auth-form-input"
            value={phone}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <label className="auth-form-input-label">
          Address
          <input
            className="auth-form-input"
            value={address}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <button className="auth-form-submit-button">Register</button>
      </form>
      <Link to="/login">Already Have An Account? Login</Link>
    </div>
  );
}

export default Register;
