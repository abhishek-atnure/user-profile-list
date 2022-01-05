import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username && !password) return;
    if (username === "foo" && password === "bar") {
      localStorage.setItem("user", username);
      localStorage.setItem("password", password);
      window.location = "/";
    } else {
      alert("try with foo and bar");
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <div className="username-field">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="password-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </form>
  );
}

export default LoginPage;
