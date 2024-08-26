import React from 'react';
import './HeroSection.css'; 

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the Pilgrimage Journey</h1>
        <p>Explore the sacred sites and embark on a spiritual journey.</p>
        <button className="cta-button">Explore Pilgrimage Sites</button>
      </div>
    </section>
  );
}

export default HeroSection;
