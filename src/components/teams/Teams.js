import React from "react";
import { teamsData } from "../../data";
import "./Teams.css";

export default function Teams({ onSelectTeam }) {
  return (
    <div className="teams-container">
      <header className="teams-hero">
        <h1 className="teams-title">Football Hub</h1>
        <p className="teams-subtitle">
          Select a club from the roster below to view detailed squad information.
        </p>
      </header>

      <section className="teams-list-section">
        <div className="teams-grid">
          {teamsData.map((team) => (
            <div 
              key={team.id} 
              className="team-name-card"
              onClick={() => onSelectTeam(team)}
            >
              <img 
                src={team.logo} 
                alt={`${team.name} Logo`} 
                className="team-icon" 
              />
              <h3 className="team-card-title">{team.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}