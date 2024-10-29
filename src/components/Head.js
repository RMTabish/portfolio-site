// Head.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Head = ({ theme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to close sidebar on outside click
  const handleOutsideClick = (event) => {
    if (sidebarOpen && !event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [sidebarOpen]);

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
      </nav>
    </header>
  );
};

export default Head;
