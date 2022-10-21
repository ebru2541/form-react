import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("object");
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="display-4 m-4 text-danger">FORM</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          //   value={username}
          onChange={handleUsername}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          //   value={email}
          aria-describedby="emailHelp"
          onChange={handleEmail}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password1"
          //   value={password}
          onChange={handlePassword}
        />
      </div>

      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
  );
};

export default Form;
