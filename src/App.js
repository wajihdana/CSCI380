import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Teams from "./components/teams/Teams";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import TeamDetails from "./components/teams/TeamsDetails";

export default function App() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const scrollToSection = (sectionId) => {
    if (selectedTeam) {
      setSelectedTeam(null);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedTeam) {
    return (
      <div className="app-container">
        <Navbar onTabChange={scrollToSection} />
        <main className="main-content" style={{ marginTop: "5rem" }}>
          <TeamDetails
            team={selectedTeam}
            onBack={() => setSelectedTeam(null)}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar onTabChange={scrollToSection} />
      <main className="main-content" style={{ marginTop: "5rem" }}>
        <section id="home">
          <Home onTabChange={scrollToSection} />
        </section>
        <section id="features">
          <Teams onSelectTeam={handleSelectTeam} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
