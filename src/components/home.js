import React from "react";


import './Home.css';

const Home=()=>{
return (


    <div className="home-container">
        <div className="homeLeft">

            <h1>Hey! I'M RAI TABISH</h1>
            <p>
             I'm a Computer Science major graduating in June 2025.<br></br>

             An aspiring Software engineer with a focus on
             data engineering, NLP, and computer vision, always exploring new technologies in software engineering.

                
            </p>

            <a href="/Rai_Tabish_CV_7.pdf" download className="download-btn">Download My Resume</a>

        </div>
        <div className="homeright">
            <div className="pf">
                <img src="/nicatDP.jpeg" alt= 'Rai Tabish'></img>
            </div>

            <div className="social-links">
                <a href="mailto:raimuhammadtabish@gmail.com" className="social-btn">
                    <img src="/gmail.png" alt="Email" />
                </a>
                <a href="https://github.com/RMTabish" target="_blank" className="social-btn">
                    <img src="/github.png" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/rai-muhammad-tabish" target="_blank" className="social-btn">
                    <img src="/linkedin.png" alt="LinkedIn" />
                </a>
                </div>

        </div>

    </div>
);
};


export default Home;


