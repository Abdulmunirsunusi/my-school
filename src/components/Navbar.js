import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isAuthenticated, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">SchoolMS</div>
      <div className={`nav-links ${open ? "active" : ""}`}>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/students">Students</Link>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      <div className="burger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
