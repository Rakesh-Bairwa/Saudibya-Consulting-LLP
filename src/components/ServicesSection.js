import React from "react";
import "../styles/ServicesSection.css";

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <h2>Elevate Your Business</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Streamline Retail Operations</h3>
          <p>We offer retail solutions that simplify your business operations.</p>
        </div>
        <div className="service-card">
          <h3>LS Central ERP</h3>
          <p>Boost your ERP capabilities with LS Central ERP, built to scale your operations.</p>
        </div>
        <div className="service-card">
          <h3>MS D365 Business Central</h3>
          <p>Manage your business with the comprehensive MS D365 suite.</p>
        </div>
        <div className="service-card">
          <h3>A Central Platform</h3>
          <p>Integrate all business processes with a unified platform.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
