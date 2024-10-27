// Head.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Head = ({ toggleTheme, theme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Rai Tabish</h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`nav-links ${sidebarOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
        </ul>
        
        {/* Theme toggle inside the sidebar for mobile */}
        <div className="sidebar-theme-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={theme === 'light'}
              onChange={toggleTheme}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </nav>

      {/* Theme toggle in header for larger screens */}
      <div className="theme-toggle">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={theme === 'light'}
            onChange={toggleTheme}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </header>
  );
};

export default Head;
