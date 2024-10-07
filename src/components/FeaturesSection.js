import React from "react";
import "../styles/FeaturesSection.css";

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2>More Excellence with LS & Business Central ERPs</h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>MS D365 for Manufacturing</h3>
          <p>Comprehensive solutions for optimizing manufacturing operations.</p>
        </div>
        <div className="feature-item">
          <h3>LS Central for Retail</h3>
          <p>Robust solutions for the retail industry to streamline business processes.</p>
        </div>
        <div className="feature-item">
          <h3>LS Central for Pharmacy</h3>
          <p>Pharmacy management solutions designed to improve efficiency.</p>
        </div>
        <div className="feature-item">
          <h3>Add-on Services</h3>
          <p>Additional services for custom software development and support.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
