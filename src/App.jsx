import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Incomplete from "./pages/Incomplete";
import Deleted from "./pages/Deleted";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user);
    }
  }, [user]);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/incomplete" element={<Incomplete />} />
        <Route path="/deleted" element={<Deleted />} />
      </Routes>
    </Router>
  );
}

export default App;
