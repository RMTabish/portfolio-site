import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Head from './components/Head'; 
import Home from './components/home';
import Experience from './components/Experience';
import ProjectPage from './components/ProjectPage';
import Review from './components/Review';
import Certifications from './components/Certification';
function App() {
  const [showHeader, setShowHeader] = useState(true); // Header visibility state

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if user is scrolling down or up
      if (scrollTop > lastScrollTop) {
        setShowHeader(false); // Hide header when scrolling down
      } else {
        setShowHeader(true); // Show header when scrolling up
      }

 

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);



  return (
    <Router>
      <div className="App">
        <Head showHeader={showHeader} /> {/* Pass header visibility state */}
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
