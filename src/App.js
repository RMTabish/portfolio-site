// App.js
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Head from './components/Head';
import Home from './components/home';
import Experience from './components/Experience';
import ProjectPage from './components/ProjectPage';
import Review from './components/Review';
import Certifications from './components/Certification';

function App() {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  // Toggle between dark and light theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      {/* Apply theme class dynamically */}
      <div className={`App ${theme}`}>
        <Head toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
