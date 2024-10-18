import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Head = ({ className }) => {
  return (
    // Apply the dynamic class passed from the App.js (either 'header-hidden' or 'header-visible')
    <header className={`header ${className}`}>
      <div className='logo'>
        <h1>Rai Tabish</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to='/'> Home </Link></li>
          
          <li><Link to='/certifications'>Certifications</Link></li>
          
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/experience'>Experience</Link></li>
          <li><Link to='/reviews'> Reviews</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Head;
