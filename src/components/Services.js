import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-card">
        <h3>Guided Tours</h3>
        <p>Join our expert guides for an enriching experience.</p>
      </div>
      <div className="service-card">
        <h3>Accommodation</h3>
        <p>Find comfortable and convenient places to stay.</p>
      </div>
      {/* Add more services as needed */}
    </section>
  );
}

export default Services;
