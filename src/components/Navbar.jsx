import React, { useState, useEffect } from 'react';
import logo from '../assets/initial.png'; 

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleLinkClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setIsActive(false);
      }
    };

    const links = document.querySelectorAll('.nav-list a');
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className={`nav-container ${isActive ? 'active' : ''}`}>
        <ul className="nav-list">
          <li><a href="#home">Profile</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <i className={isActive ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
};

export default Navbar;