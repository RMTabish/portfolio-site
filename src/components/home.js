// Home.js
import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>Hey! I'M RAI TABISH</h1>
        <p>
          I'm a Computer Science major graduating in June 2025.<br />
          An aspiring Software engineer with a focus on data engineering, NLP, and computer vision, always exploring new technologies in software engineering.
        </p>
        <a href={`${process.env.PUBLIC_URL}/Rai_Tabish_CV_7.pdf`} download className="download-btn">Download My Resume</a>
      </div>
      
      <div className="home-right">
        <div className="profile-image">
          <img src={`${process.env.PUBLIC_URL}/nicatDP.jpeg`} alt="Rai Tabish" />
        </div>

        <div className="social-links">
          <a href="mailto:raimuhammadtabish@gmail.com" className="social-btn">
            <img src={`${process.env.PUBLIC_URL}/gmail.png`} alt="Email" />
          </a>
          <a href="https://github.com/RMTabish" target="_blank" className="social-btn">
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/rai-muhammad-tabish" target="_blank" className="social-btn">
            <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
