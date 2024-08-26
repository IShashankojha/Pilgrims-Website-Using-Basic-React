import React from 'react';
import './sites.css';

function PopularSites() {
  return (
    <section className="popular-sites">
      <h2>Popular Pilgrimage Places</h2>
      <div className="slick-container">
        <button className="scroll-button scroll-left">←</button>
        <div className="sites-grid">
          <div className="site-card ayodhya-dham">
            <h3>Ayodhya Dham</h3>
            <p>Discover the spiritual significance of Ayodhya.</p>
          </div>
          <div className="site-card varanasi">
            <h3>Varanasi</h3>
            <p>Explore the ancient city of Varanasi, a hub of spiritual energy.</p>
          </div>
          <div className="site-card haridwar">
            <h3>Haridwar</h3>
            <p>Experience the divine atmosphere of Haridwar, the gateway to the gods.</p>
          </div>
          {/* Add more site cards as needed */}
        </div>
        <button className="scroll-button scroll-right">→</button>
      </div>
    </section>
  );
}

export default PopularSites;
