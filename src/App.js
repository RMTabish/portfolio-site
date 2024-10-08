import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'; // Make sure this file is in the src directory
import Head from './components/Head'; // Importing from the components folder
import Home from './components/home'; // Make sure 'Home.js' exists in the components folder
import Experience from './components/Experience'; // Make sure 'Experience.js' exists in the components folder

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
