import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image-container">
          <img
            src="https://avatars.githubusercontent.com/u/104081884?v=4"
            alt="Deepayan Bhattacharyya"
            className="about-image"
          />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hello! I'm <span className="highlight">Deepayan Bhattacharyya</span>,  
            a passionate <strong>Full Stack Developer</strong> and  
            <strong> AI enthusiast</strong> currently in my 4th year of  
            BTech in Computer Science and Engineering. I enjoy building  
            interactive, scalable, and impactful applications using  
            technologies like <strong>React.js</strong>, <strong>Node.js</strong>,  
            and <strong>Python</strong>.
          </p>

          <p className="about-text">
            My projects span across various domains — from developing  
            an <strong>AI-Driven Cloud-Based Emotion Recognition System</strong>  
            to building real-time applications like <strong>Zoom Clone</strong>  
            and <strong>Price Pulse Reader</strong>.  
            I love working on challenges that combine both creativity  
            and problem-solving.
          </p>

          <p className="about-text">
            Outside of coding, I’m an <strong>enthusiastic football player</strong>,  
            fitness lover, and guitar hobbyist. I believe in continuous  
            learning and pushing my limits to explore new possibilities in  
            technology and innovation.
          </p>

          <a
            href="#contact"
            className="about-button"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
