import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css"; // ✅ same CSS file

const DoctorNavbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/DoctorSignIn");
  };

  const username = user?.name || "Doctor";

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        CareConnect
      </Link>

      {/* ✅ Removed Home & About — doctor only sees greeting + dropdown */}
      <div className="auth-buttons">
        {user ? (
          <div
            className="user-dropdown-container"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="welcome-text">Hi, {username} ▼</span>

            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/settings" className="dropdown-item">
                  Settings
                </Link>
                <button onClick={handleLogout} className="dropdown-item logout">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/DoctorSignIn">
            <button className="signin-btn">Sign In</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default DoctorNavbar;
