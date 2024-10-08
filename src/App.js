import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      
        <Home/>
        <About />
        <Education/>
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer/>
      
    </div>
  );
};

export default App;
