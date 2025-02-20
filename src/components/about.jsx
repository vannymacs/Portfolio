import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "../assets/about.jpg";

const About = () =>{
    return(
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

        <div className="about-con">
            <div className="content">
                <div className="sub-con">
                    <div className="about-txt">
                        <h1 className="name">Ivan Joudy Macasa</h1>
                        <h2>A dedicated Graphic Designer</h2>
                        <div className="horizontal-line"></div>
                        <p>
                            An Information Technology student with a passion for tech, motors, and gaming. As a motor enthusiast, anything related to engines and speed easily catches my attention. I’m detail-oriented, which helps me both in my studies and hobbies. In my free time, I enjoy gaming and playing basketball, appreciating both the strategy and competition they offer. I’m always eager to learn new things, meet like-minded people, and take on challenges that push me to grow.
                        </p>
                    </div>

                    <div className="about-img">
                        <img src={AboutMe} alt="" />
                    </div>

                </div>
            </div>
        </div>
      </div>
    );
};

export default About;