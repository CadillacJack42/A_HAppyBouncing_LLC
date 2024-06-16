import React, { useState } from "react";
import "../css/Auth.css";
import { signUpUser } from "../services/fetch-utils";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    signUpUser(email, password).then((res) =>
      console.log("RESPONSE FROM CREAT ADMIN", res)
    );
  };

  return (
    <div className="auth-form-container">
      <p className="auth-form-title">Register New Admin</p>
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
      </form>
    </div>
  );
}

export default Register;
