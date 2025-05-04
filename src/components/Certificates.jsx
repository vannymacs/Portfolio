import React, { useState, useEffect } from 'react';
import C1 from '../assets/C1.jpg';
import C2 from '../assets/C2.jpg';
import C3 from '../assets/C3.jpg';
import C4 from '../assets/C4.jpg';
import C5 from '../assets/C5.jpg';
import C6 from '../assets/C6.jpg';

const Certificates = () => {
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

  // Handle Escape key to close modal
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

  const certificates = [
    {
      title: 'Python for Beginners',
      image: C1,
      issuer: 'Simplilearn SkillUp, 2025',
      description: 'Learned Python basics, including syntax, data structures, and simple applications.'
    },
    {
      title: 'Introduction to Front End Development',
      image: C2,
      issuer: 'Simplilearn SkillUp, 2025',
      description: 'Mastered HTML, CSS, and JavaScript for building interactive web interfaces.'
    },
    {
      title: 'Introduction to Data Visualization',
      image: C3,
      issuer: 'Simplilearn SkillUp, 2025',
      description: 'Explored data visualization techniques using tools like Matplotlib and Tableau.'
    },
    {
      title: 'Introduction to Machine Learning with R',
      image: C4,
      issuer: 'Simplilearn SkillUp, 2025',
      description: 'Studied machine learning concepts and implemented models using R.'
    },
    {
      title: 'Generative AI for Beginners',
      image: C5,
      issuer: 'Simplilearn SkillUp, 2025',
      description: 'Introduced to generative AI concepts and basic model creation.'
    },
    {
      title: 'Responsive Web Design',
      image: C6,
      issuer: 'freeCodeCamp, 2025',
      description: 'Built responsive websites using HTML, CSS, and modern design principles.'
    }
  ];

  return (
    <section id="certificates">
      <div className="container">
        <h2>My Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="certificate-img-wrapper">
                <img src={cert.image} alt={cert.title} className="certificate-img" />
                <div className="img-overlay">
                  <i
                    className="fas fa-eye preview-icon"
                    onClick={() => openModal(cert.image)}
                    role="button"
                    aria-label={`Preview ${cert.title}`}
                  ></i>
                </div>
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedImage} alt="Certificate preview" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;