import React, { useState, useEffect } from 'react';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work4.jpg';
import work3 from '../assets/work5.jpg';
import work4 from '../assets/work6.jpg';
import work5 from '../assets/work7.jpg';

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const designProjects = [
    {
      title: 'Typography Poster',
      image: work1,
      description: 'Highlights the creative use of typography, combining bold text with a cyclist image to create a motivational and visually striking design.',
      link: 'https://github.com/IvanJody/pokedex-app'
    },
    {
      title: 'Gymperks Logo',
      image: work2,
      description: 'Designing logo for GymPerks, combining strength and resilience through a Spartan helmet and flexed arm, creating a powerful brand identity.',
      link: 'https://github.com/IvanJody/tribute-page'
    },
    {
      title: 'WMSU Palaro 2024',
      image: work3,
      description: 'A poster showcasing athletes in action, capturing the excitement, fun, and memories of WMSU Palaro 2024, highlighting the passion and school spirit of student-athletes.',
      link: 'https://github.com/IvanJody/ecommerce-landing'
    }
  ];

  const webProjects = [
    {
      title: 'TO-DO LIST',
      image: work4,
      description: 'A React-based Todo List project is a weekly task management tool designed for project system administration. It offers an easy-to-use interface for adding, editing, and deleting tasks, helping users prioritize and track their activities efficiently.',
      projectLink: 'https://vanny-todo.netlify.app/',
      githubLink: 'https://github.com/vannymacs/todo-main.git'
    },
    {
      title: 'POKEMON',
      image: work5,
      description: 'This project allows users to create and simulate battles between two Pokémon using the PokeAPI. Users can build their teams, select Pokémon, and engage in dynamic simulations, enhancing the experience of Pokémon battles in an interactive way.',
      projectLink: 'https://vanny-pokemon.netlify.app/',
      githubLink: 'https://github.com/vannymacs/pokemon.git'
    }
  ];

  return (
    <section id="work">
      <div className="container">
        <h2>My Works</h2>
        
        <div className="project-section">
          <h3 className="section-label">Design Projects</h3>
          <div className="work-grid">
            {designProjects.map((project, index) => (
              <div className="project-card" key={`design-${index}`}>
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="img-overlay">
                    <i
                      className="fas fa-eye preview-icon"
                      onClick={() => openModal(project.image)}
                      role="button"
                      aria-label={`Preview ${project.title}`}
                    ></i>
                  </div>
                </div>
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="project-section">
          <h3 className="section-label">Web Projects</h3>
          <div className="work-grid">
            {webProjects.map((project, index) => (
              <div className="project-card" key={`web-${index}`}>
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="img-overlay">
                    <i
                      className="fas fa-eye preview-icon"
                      onClick={() => openModal(project.image)}
                      role="button"
                      aria-label={`Preview ${project.title}`}
                    ></i>
                  </div>
                </div>
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link" aria-label={`View ${project.title} on GitHub`}>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedImage} alt="Project preview" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;