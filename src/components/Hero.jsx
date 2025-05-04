import React from 'react';
import Profile from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero">
          <img
            src={Profile}
            alt="Ivan Joudy Macasa"
            className="profile-img"
          />
          <h1>Ivan Joudy Macasa</h1>
          <p>Graphic Designer | Practicing and passionate about creating visually appealing designs with Adobe tools and Canva</p>
          <div className="social-icons">
            <a href="https://github.com/vannymacs" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/ivan-joudy-macasa-49289b360" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://web.facebook.com/vanny.macs.1" target="_blank" rel="noopener noreferrer" title="Twitter">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="hero-buttons">
            <a href="https://vanny-blog.netlify.app/" className="btn">Explore My Blog</a>
            <a href="/public/RESUME_Ivan Macasa.pdf.pdf" download className="btn resume-btn">Download Resume</a> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
