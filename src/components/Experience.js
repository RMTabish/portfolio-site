import React from 'react';
import './Experience.css';

const experiences = [
  
  {
    title: 'Freelancer',
    company: 'Fiverr',
    date: 'January 2023 - Present',
    description: 'Completed 15+ projects in image processing, .NET desktop application development using C++, C#, OpenCV, and Python. Achieved consistent 5-star ratings with a Level 1 badge within one month.'
  },
  {
    title: 'CS Lab Demonstrator',
    company: 'FAST NUCES, Islamabad',
    date: 'Sep 2024 - Jan 2024',
    description: 'As a Lab Demonstrator, I taught Programming Fundamentals to a group of over 50 first-year students, assisting the instructor with both course design and evaluation. My role involved introducing students to key concepts in computer science, guiding them in building basic algorithms from scratch, and providing hands-on practice with Linux OS and C++ programming.'
  },
  {
    title: 'Head of Sponsorship',
    company: 'FAST Computing Society',
    date: 'January 2023 - January 2024',
    description: 'As the head of sponsorship at Fast Computing Society, I was responsible for curating the team for sponsorship, designing the proposals for the potential sponsors, and meeting potential sponsors to get them on board. I also worked closely with other teams to organize hackathons and events for the tenure of 2023-2024.'
  },
  {
    title: 'Member',
    company: 'FAST Literary Society',
    date: 'Sep 2021 - Dec 2023 ',
    description: 'As the head of sponsorship at Fast Computing Society, I was responsible for curating the team for sponsorship, designing the proposals for the potential sponsors, and meeting potential sponsors to get them on board. I also worked closely with other teams to organize hackathons and events for the tenure of 2023-2024.'
  },
  {
    title: 'Android Development Intern',
    company: 'Code Knitters – NSTP, Islamabad',
    date: 'May 2023 - Jul 2023',
    description: 'Working at a startup gave me firsthand experience in understanding its operations and the unique challenges faced by such companies. I worked on developing an Android dictionary app built with Kotlin and Android Studio. The app leveraged an API to provide users with detailed word definitions, historical context, meanings, acronyms, and synonyms. It was my first time working with Kotlin, and I quickly became proficient in the language. We also utilized Git for version control, ensuring efficient collaboration and code management.'
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
    description: 'In my first role as a Lab Demonstrator, I worked with students retaking the Programming Fundamentals course, focusing on C++ and Linux. While teaching the same curriculum as the regular class, the challenge was to help these students overcome their conceptual gaps. I encouraged them to articulate their understanding of topics, identified misunderstandings, and provided tailored guidance to improve their knowledge. Along with theory, I facilitated hands-on practice with C++ programming and Linux OS fundamentals. This role enhanced my ability to adapt my teaching style to diverse learning needs, mentor students individually, and help them build stronger programming and problem-solving skills.'
  },
  {
    title: 'Game Development Intern',
    company: 'AirDev (Remote)',
    date: 'January 2022 - April 2022',
    description: 'Collaborated with a remote team on a game development project using Unity, where I contributed to both the design and programming aspects. I used Blender to create 3D assets and developed game mechanics through C# scripting in Unity. I built a Fruit Slicer game for Android and Windows, where fruits move on a conveyor belt, and a touch-activated knife slices them. This project honed my skills in game design, asset creation, and cross-platform development.'
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
