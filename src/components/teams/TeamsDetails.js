import React from "react";
import "./TeamDetails.css";

export default function TeamDetails({ team, onBack }) {
  if (!team) return null;

  return (
    <div className="details-container">

      <header className="details-header">
        <img 
          src={team.logo} 
          alt={`${team.name} Crest`} 
          className="details-logo" 
        />
        <div className="details-meta">
          <h1 className="details-title">{team.name}</h1>
          <p className="details-subtitle">Official Roster & Squad Analysis</p>
        </div>
      </header>

      <section className="trophies-section">
        <h2 className="section-heading">Club Trophies</h2>
        <div className="trophies-grid">
          <div className="trophy-card">
            <span className="trophy-icon">🏆</span>
            <div className="trophy-info">
              <h4>{team.trophies.domesticLeagues}</h4>
              <p>Leagues</p>
            </div>
          </div>
          <div className="trophy-card">
            <span className="trophy-icon">⭐</span>
            <div className="trophy-info">
              <h4>{team.trophies.championsLeagues}</h4>
              <p>Champions Leagues</p>
            </div>
          </div>
          <div className="trophy-card">
            <span className="trophy-icon">👑</span>
            <div className="trophy-info">
              <h4>{team.trophies.domesticCups}</h4>
              <p>Cups</p>
            </div>
          </div>
        </div>
      </section>

      <section className="roster-section">
        <h2 className="section-heading">Squad Roster</h2>

        <h3 className="position-heading">Attackers</h3>
        <div className="players-grid">
          {team.squad.attackers.map((player, index) => (
            <div key={index} className="player-card">
              <div className="player-avatar">
                {player.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="player-info">
                <h4 className="player-name">{player}</h4>
                <p className="player-role">Attacker</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="position-heading">Midfielders</h3>
        <div className="players-grid">
          {team.squad.midfielders.map((player, index) => (
            <div key={index} className="player-card">
              <div className="player-avatar">
                {player.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="player-info">
                <h4 className="player-name">{player}</h4>
                <p className="player-role">Midfielder</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="position-heading">Defenders</h3>
        <div className="players-grid">
          {team.squad.defenders.map((player, index) => (
            <div key={index} className="player-card">
              <div className="player-avatar">
                {player.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="player-info">
                <h4 className="player-name">{player}</h4>
                <p className="player-role">Defender</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}