import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handelChange = (e) => {
    const fildName = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [fildName]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ name: "", email: "", password: "" });
  };
  return (
    <>
      <form className="center" onSubmit={handelSubmit} action="">
        <div>
          <label htmlFor="name"> Name </label>
          <input
            type="name"
            name="name"
            id="name"
            value={name}
            required
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="password"> password </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={handelChange}
          />
        </div>
        <div>
          <button type="submit"> Submit now </button>
        </div>
      </form>
    </>
  );
}

export default Form;
