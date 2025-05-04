import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Certificates from './components/Certificates';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Certificates />
      <Contact />
    </>
  );
};

export default App;