import React from 'react';
import './Header.css';
function Header() {
  return (
    <header className="header">
      <div className="logo">Pilgrims Journey</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Sites</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

