import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="about-title">About Our Platform</h1>
        <p className="about-subtitle">
          The core objectives behind the Football Hub architecture.
        </p>
      </header>

      <section className="about-content">
        <div className="about-card">
          <h2 className="card-headline">Responsive Layout</h2>
          <p className="card-body">
            Built using modern CSS media structures to guarantee fluid scaling
            across mobile, tablet, and desktop viewports.
          </p>
        </div>

        <div className="about-card">
          <h2 className="card-headline">Content Organization</h2>
          <p className="card-body">
            Designed to categorize leagues, clubs, and player data into
            decoupled modules for simple navigation and management.
          </p>
        </div>

        <div className="about-card">
          <h2 className="card-headline">Modern Stack</h2>
          <p className="card-body">
            Migrated from basic static components into an interactive
            single-page application structure utilizing React hooks.
          </p>
        </div>
      </section>
    </div>
  );
}
