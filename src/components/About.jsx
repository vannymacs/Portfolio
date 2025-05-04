import React from 'react';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm Ivan Jody Macasa, a budding graphic designer based. I'm passionate about learning and practicing graphic design, using tools like Adobe Photoshop, Illustrator, and Canva to create visually engaging designs. My goal is to craft designs that communicate ideas effectively and resonate with audiences.
            </p>
            <p>
              When I'm not designing, I explore new design trends, take online courses to improve my skills, and draw inspiration from my travels, which I share on my blog. I'm excited to grow as a designer and collaborate on creative projects!
            </p>
            <ul className="skills-list">
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Canva</li>
              <li>Typography</li>
              <li>Color Theory</li>
              <li>Branding Basics</li>
            </ul>
          </div>
          <img
            src={about}
            alt="Workspace"
            className="workspace-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;