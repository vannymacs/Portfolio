import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/ivan.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="#">Skill</Link></li>
          <li><Link to="#">Work</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </nav>

      <div className="content">
        <div className="right-con">
          <h1>Hello.</h1>
          <h2>I'm Ivan Macasa</h2>
          <p>a Graphic designer</p>
          <div className="portfolio-btn">
            <button>View portfolio</button>
          </div>
        </div>

        <div className="middle-con">
          <div className="profile-container">
            <div className="profile">
              <img src={profile} alt="Profile" />
            </div>
            <div className="chat-icon"><i className="fas fa-comments"></i></div>
          </div>
        </div>

        <div className="left-con">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
