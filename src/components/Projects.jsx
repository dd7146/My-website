import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "AI Driven Cloud-Based Emotion Recognition System",
    description:
      "A real-time video-based emotion recognition system using a hybrid CNN-Attention model, deployed on AWS EC2 and S3 for scalable processing.",
    github: "https://github.com/dd7146/real-time-emotion-detection",
  },
  {
    title: "Price Pulse Reader",
    description:
      "An AI-powered price monitoring and prediction tool for tracking market trends and providing real-time alerts.",
    github: "https://github.com/dd7146/Price-Pulse_Reader",
  },
  {
    title: "Zoom Clone",
    description:
      "A video conferencing app with real-time communication features, built using Node.js, WebRTC, and Socket.io.",
    github: "https://github.com/dd7146/zoom-clone",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


