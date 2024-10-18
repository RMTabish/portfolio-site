import React, { useState } from "react";
import "./ProjectPage.css";

// Example project data
const initialProjects = [
  {
    title: "Food Slicer",
    description: "A 3D Game Developed in Unity ",
    technologies: ["Unity3D", "C#", "Blender"],
    videoUrl: `${process.env.PUBLIC_URL}/foodslicer.mp4`,
    projectLink: "https://github.com/RMTabish/food-slicer",
    features: ["3D"]
  },
  {
    title: "Fast Society Management System",
    description: "A Student Society Management made in C#",
    technologies: ["SQL", "Windows Forms", "Database Design","C#"],
    imageUrl: `${process.env.PUBLIC_URL}/fsms.png`,
    projectLink: "https://github.com/RMTabish/Fast-Society-Management-s",
    features: ["User authentication", "notification", "Responsive design"]
  },
  // Add more projects here...
];

const ProjectPage = () => {
  const [projects] = useState(initialProjects);

  return (
    <div className="project-page-container">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="preview">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  alt={project.title}
                  controls
                  className="project-video"
                />
              ) : (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
              )}
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
              <p><strong>Key Features:</strong> {project.features.join(", ")}</p>
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
