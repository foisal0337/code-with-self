import React from "react";
import "./login.css";

function Login() {
  return (
    <>
      <div className="login">
        <div>
          <span className="loginTittle"> Login </span>
          <form className="loginForm">
            <label> Email </label>
            <input
              className="loginInput"
              type="text"
              placeholder="Enter your email..."
            />
            <label>Passward</label>
            <input
              className="loginInput"
              type="password"
              placeholder="Enter your password..."
            />
            <button className="loginButton"> Login </button>
          </form>
        </div>
        <div>
          <button className="loginRegesterButton"> Regester</button>
        </div>
      </div>
    </>
  );
}

export default Login;
