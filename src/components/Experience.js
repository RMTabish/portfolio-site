import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Technology Program Intern',
    company: 'Knodemy',
    date: 'September 2024 - Present',
    responsibilities: [
      'Created curriculum on programming fundamentals and data structures for young learners.',
      'Developing a Learning Management System focusing on content delivery, UI/UX, and responsive design.'
    ]
  },
  {
    title: 'Freelancer',
    company: 'Fiverr',
    date: 'January 2023 - Present',
    achievements: [
      'Completed 15+ projects in image processing, .NET desktop applications (C++, C#, OpenCV, Python).',
      'Achieved consistent 5-star ratings, earning a Level 1 badge within one month.'
    ]
  },
  {
    title: 'CS Lab Demonstrator',
    company: 'FAST NUCES, Islamabad',
    date: 'Sep 2024 - Jan 2024',
    responsibilities: [
      'Taught Programming Fundamentals to over 50 first-year students, assisting with course design and evaluation.',
      'Guided students in algorithm development and provided hands-on practice with Linux OS and C++ programming.'
    ]
  },
  {
    title: 'Head of Sponsorship',
    company: 'FAST Computing Society',
    date: 'January 2023 - January 2024',
    responsibilities: [
      'Curated the sponsorship team, designed proposals, and liaised with potential sponsors.',
      'Collaborated with other teams to organize hackathons and events throughout 2023-2024.'
    ]
  },
  {
    title: 'Member',
    company: 'FAST Literary Society',
    date: 'Sep 2021 - Dec 2023',
    responsibilities: [
      'Actively participated in organizing literary events and fostering a collaborative environment for members.',
      'Supported event planning and engagement initiatives to promote literary activities on campus.'
    ]
  },
  {
    title: 'Android Development Intern',
    company: 'Code Knitters – NSTP, Islamabad',
    date: 'May 2023 - Jul 2023',
    responsibilities: [
      'Developed an Android dictionary app with Kotlin and Android Studio, integrating API for definitions and synonyms.',
      'Gained experience with Kotlin, version control (Git), and collaboration in a startup environment.'
    ]
  },
  {
    title: 'Game Development Intern',
    company: 'AirDev (Remote)',
    date: 'January 2022 - April 2022',
    responsibilities: [
      'Collaborated on a game development project using Unity, designing 3D assets in Blender.',
      'Built a Fruit Slicer game for Android and Windows, enhancing skills in game design and C# scripting.'
    ]
  },
  {
    title: 'CS Lab Demonstrator',
    company: 'FAST NUCES, Islamabad',
    date: 'January 2023 - November 2023',
    responsibilities: [
      'Guided students retaking Programming Fundamentals, focusing on C++ and Linux OS.',
      'Adapted teaching style to diverse learning needs, improving students’ programming and problem-solving skills.'
    ]
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
              {exp.responsibilities && (
                <ul>
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {exp.achievements && (
                <ul>
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;