import React from 'react';
import './Certifications.css';

const certifications = [
  
  {
    title: 'Intermediate SQL',
    issuingOrganization: 'DataCamp',
    image: `${process.env.PUBLIC_URL}/sql1.jpg`,
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/325f0058e128c7f3ee22b16becd3607da1d6b32e'
  },
  {
    title: 'Google AI Essentials',
    issuingOrganization: 'Google',
    image: `${process.env.PUBLIC_URL}/google-ai-essentials.png`,
    link: 'https://www.credly.com/badges/db9ef061-2a6e-476a-8a6f-11e6c085ce8c'
  },
  {
    title: 'Introduction to Kubernetes',
    issuingOrganization: 'Data Camp',
    image: `${process.env.PUBLIC_URL}/k8.jpg`,
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/7ead5ee2a8f4a5177fc6585463da855b62ed2247'
  },
  {
    title: ' Introduction to Natural Language Processing in Python',
    issuingOrganization: 'Data Camp',
    image: `${process.env.PUBLIC_URL}/nlp.jpg`,
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/7ead5ee2a8f4a5177fc6585463da855b62ed2247'
  },  {
    title: ' Understanding Data Engineering',
    issuingOrganization: 'Data Camp',
    image: `${process.env.PUBLIC_URL}/dataeng1.jpg`,
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/bb75943e6b4cddf407f6409cc7390fd4e0776fba'
  }
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h1 className="certifications-title"></h1>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img src={cert.image} alt={cert.title} className="certification-image" />
            <div className="certification-info">
              <h2>{cert.title}</h2>
              <h4>{cert.issuingOrganization}</h4>
              <a href={cert.link} className="view-cert-btn" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
