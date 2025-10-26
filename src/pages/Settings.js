import React, { useState, useEffect } from "react";
import "./Settings.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  // Apply theme on mount
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="settings-page">
      <div className="settings-overlay">
        <div className="settings-container">
          <h2 className="settings-title">Settings</h2>
          <p className="settings-subtitle">
            Manage your preferences and personalization.
          </p>

          <div className="settings-options">
            {/* 🔘 Dark Mode Toggle */}
            <div className="setting-item">
              <span>Dark Mode</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider round"></span>
              </label>
            </div>

            {/* 🔔 Notifications (non-functional placeholder for now) */}
            <div className="setting-item">
              <span>Notifications</span>
              <select>
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>

            {/* 🌐 Language (future-ready dropdown) */}
            <div className="setting-item">
              <span>Language</span>
              <select>
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
              </select>
            </div>

            {/* ⚙️ Account Info placeholder */}
            <div className="setting-item">
              <span>Account Settings</span>
              <button className="account-btn">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
