import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Head from './components/Head'; 
import Home from './components/home';
import Experience from './components/Experience';

function App() {
  const [showHeader, setShowHeader] = useState(true); // Header visibility state

  useEffect(() => {
    let lastScrollTop = 0; // To store the previous scroll position

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if user is scrolling down or up
      if (scrollTop > lastScrollTop) {
        setShowHeader(false); // Hide header when scrolling down
      } else {
        setShowHeader(true); // Show header when scrolling up
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Apply the hidden or visible class based on showHeader state */}
        <Head className={showHeader ? 'header header-visible' : 'header header-hidden'} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
