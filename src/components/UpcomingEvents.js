import React from 'react';
import './event.css';

function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <ul>
        <li>
          <h3>Event 1</h3>
          <p>Date: 2024-09-15</p>
          <p>Description of Event 1.</p>
        </li>
        <li>
          <h3>Event 2</h3>
          <p>Date: 2024-10-10</p>
          <p>Description of Event 2.</p>
        </li>
        {/* Add more events as needed */}
      </ul>
    </section>
  );
}

export default UpcomingEvents;
