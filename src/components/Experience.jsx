import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Philippine Overseas Employment Administration - Zamboanga City, Philippines',
      role: 'Internship',
      duration: 'January 2019 - March 2019',
      description: 'Managed accurate data entry of applicant details into the POEA database system, ensuring data integrity and compliance with standards, while supporting related administrative tasks.',
    },
    {
      company: 'Webcrafters Axis',
      role: 'Tester',
      duration: '137 days',
      description: 'Developed the WMSU Supply and Inventory Monitoring System as a requirement for our Software Engineering subject, where I served as a Tester, ensuring system functionality and reliability.'
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2>My Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-info">
                <h3>{exp.company}</h3>
                <div className="role">{exp.role}</div>
                <div className="duration">{exp.duration}</div>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;