import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Pilgrims Say</h2>
      <div className="testimonial-card">
        <p>"This journey was life-changing. The spiritual experience was profound."</p>
        <p>-ALEX </p>
      </div>
      <div className="testimonial-card">
        <p>"A beautiful experience filled with peace and serenity."</p>
        <p>- Robert </p>
      </div>
      <div className="testimonial-card">
        <p>"This journey was life-changing. The spiritual experience was profound."</p>
        <p>-Bhuvan</p>
      </div>
      <div className="testimonial-card">
        <p>"A beautiful experience filled with peace and serenity."</p>
        <p>-john</p>
      </div>
      {/* Add more testimonials as needed */}
    </section>
  );
}

export default Testimonials;
