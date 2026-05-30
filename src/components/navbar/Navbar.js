import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ onTabChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "features", "about", "contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1
          className="navbar-logo"
          onClick={() => onTabChange("home")}
          style={{ cursor: "pointer" }}
        >
          FOOTBALL HUB
        </h1>

        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item}
              className="nav-btn"
              onClick={() => onTabChange(item)}
            >
              {item === "features" ? "Teams & Features" : item}
            </button>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle-btn">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item}
              className="mobile-nav-btn"
              onClick={() => {
                onTabChange(item);
                setIsOpen(false);
              }}
            >
              {item === "features" ? "Teams & Features" : item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
