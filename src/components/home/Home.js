import React from "react";
import "./Home.css";

export default function Home({ onTabChange }) {
  return (
    <div className="home-container">
      <header className="home-hero">
        <div className="hero-content">
          <span className="hero-badge">Season 2026 Live</span>
          <h1 className="home-title">
            THE ULTIMATE <br />
            <span>FOOTBALL HUB</span>
          </h1>
          <p className="home-subtitle">
            Track statistics, explore club rosters, and analyze deep team
            performance breakdowns across global leagues all in one unified
            dashboard.
          </p>
          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => onTabChange("features")}
            >
              Explore Clubs →
            </button>
            <button
              className="secondary-btn"
              onClick={() => onTabChange("about")}
            >
              Learn More
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
