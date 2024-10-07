import React from "react";
import "../styles/AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h2>Your Hypergrowth Partner</h2>
      <p>We help businesses achieve seamless growth through tailored solutions. Our experienced team works globally, helping businesses expand and succeed.</p>
      <div className="about-stats">
        <div>
          <h2>30+</h2>
          <p>Happy Clients</p>
        </div>
        <div>
          <h2>Worldwide Offices</h2>
          <p>Offices across multiple countries</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
