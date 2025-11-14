import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  return (
    <nav className="navbar">
      <h2>TodoList</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/incomplete">Incomplete</Link>
        <Link to="/completed">Completed</Link>
        <Link to="/deleted">Deleted</Link>
      </div>

      <div className="user-section">
        <span className="username">Hi, {user} </span>
        <button
            onClick={() => {
                const user = localStorage.getItem("user");
                localStorage.removeItem(`todos_${user}`);
                localStorage.removeItem(`deleted_${user}`);
                localStorage.removeItem("user");
                setUser("");
            }}
            >
            Logout
        </button>

      </div>
    </nav>
  );
}
