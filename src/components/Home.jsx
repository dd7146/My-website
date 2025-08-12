import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="welcome-text">👋 Welcome to My Portfolio</h1>
        <h2 className="home-title">Hi, I'm <span>Deepayan Bhattacharyya</span></h2>
        <p className="home-description">
          I'm a passionate Full Stack Developer and AI enthusiast, always exploring
          innovative solutions in web and cloud technologies.
        </p>
        <a href="#projects" className="home-btn">View My Work</a>
      </div>
    </section>
  );
};

export default Home;
