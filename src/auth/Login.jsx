import React, { useEffect, useState } from "react";
// import "../css/Auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../services/fetch-utils";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserEmailUpdate = (e) => {
    e?.preventDefault();
    setEmail(e.target.value);
  };

  const handleUserPasswordUpdate = (e) => {
    e?.preventDefault();
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e?.preventDefault();

    try {
      signInUser(email, password);
      navigate("/");
    } catch (error) {
      console.log("AN ERROR HASS OCCURED IN LOGIN", error);
    }
    // console.log("USER FROM HANDLE LOGIN", user);
  };

  return (
    <div className="auth-form-container">
      <p className="auth-form-title">Login</p>
      <form
        className="auth-form"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <label className="auth-form-input-label">
          Email
          <input
            className="auth-form-input"
            value={email}
            onChange={(e) => handleUserEmailUpdate(e)}
          ></input>
        </label>
        <label className="auth-form-input-label">
          Password
          <input
            className="auth-form-input"
            value={password}
            onChange={(e) => handleUserPasswordUpdate(e)}
            type={"password"}
          ></input>
        </label>
        <button className="auth-form-submit-button">Login</button>
      </form>
      <Link to="/register">Click Here To Register</Link>
    </div>
  );
}

export default Login;
