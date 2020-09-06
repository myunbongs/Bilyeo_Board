import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function LoginForm({ authenticated, login, location }) {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");

  const handleClickLogin = () => {
    try {
      login({ ID, password });
    } catch (e) {
      alert("Failed to login");
      setID("");
      setPassword("");
    }
  };

  const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <>
      <h1>Login</h1>
      <input
        value={ID}
        onChange={({ target: { value } }) => setID(value)}
        type="text"
        placeholder="ID"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClickLogin}>Login</button>
    </>
  );
}

export default LoginForm;
