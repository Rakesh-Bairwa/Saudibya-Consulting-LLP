import React from "react";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Expertise Solutions for All</h1>
        <p>If you can envision it, we can build it. Let's make your business grow.</p>
        <button className="cta-button">Ask for Demo</button>
      </div>
      <div className="hero-stats">
        <div>
          <h2>128+</h2>
          <p>Projects Done</p>
        </div>
        <div>
          <h2>4,253</h2>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
