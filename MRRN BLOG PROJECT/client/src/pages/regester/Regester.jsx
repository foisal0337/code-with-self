import React from "react";
import "./regester.css";

function Regester() {
  return (
    <>
      <div className="regester">
        <div>
          <span className="regesterTittle"> REGESTER </span>
          <form className="regesterForm">
            <label> Email </label>
            <input
              className="regesterInput"
              type="text"
              placeholder="Enter your email..."
            />
            <label>Passward</label>
            <input
              className="regesterInput"
              type="password"
              placeholder="Enter your password..."
            />
            <button className="regesterButton"> Regester </button>
          </form>
        </div>
        <div>
          <button className="regesterLoginButton"> Login</button>
        </div>
      </div>
    </>
  );
}

export default Regester;
