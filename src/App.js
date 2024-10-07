import './App.css';
import Head from './components/Head';
import Home from './components/home'; // Correctly import based on file name

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate for redirect

function App() {
  return (
    <Router>
      <div className='App'>
        <Head />
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          
          {/* Redirect any invalid paths to the home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
