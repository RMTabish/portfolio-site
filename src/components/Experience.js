import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Android Development Intern',
    company: 'RADWI – NSTP, Islamabad',
    date: 'April 2023 - August 2023',
    description: 'Developed a dictionary app using Kotlin in Android Studio. Integrated RESTful API for real-time dictionary results, reducing user search times by 30%.'
  },
  {
    title: 'Game Development Intern',
    company: 'AirDev (Remote)',
    date: 'January 2022 - April 2022',
    description: 'Learned Unity and Blender on the go while developing 3D game mechanics. Led the development of 3D game mechanics in a remote startup.'
  },
  {
    title: 'CS Lab Demonstrator',
    company: 'FAST NUCES, Islamabad',
    date: 'January 2023 - November 2023',
    description: 'Evaluated and facilitated weekly labs for 50+ students in the Programming Fundamentals (C++) course. Received positive feedback for effectively communicating and supporting students.'
  },
  {
    title: 'Freelancer',
    company: 'Fiverr',
    date: 'January 2023 - Present',
    description: 'Completed 15+ projects in image processing, .NET desktop application development using C++, C#, OpenCV, and Python. Achieved consistent 5-star ratings with a Level 1 badge within one month.'
  }
];

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`experience-box ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="experience-content">
              <h2>{exp.title}</h2>
              <h4>{exp.company}</h4>
              <p>{exp.date}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
