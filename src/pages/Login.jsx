import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim()) onLogin(name);
  };

  return (
    <div className="login-page">
      <h2>Welcome to Todo App</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
