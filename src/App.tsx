import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import HeroSection from './Componets/Hero_Section/HeroSection';
import About from './Componets/About_page/About';
import Service from './Componets/Service_page/Service';
import Projects from './Componets/Projects_page/Projects';
import Contact from './Componets/Contact_page/Contact';
import Footer from './Componets/Footer/Footer';
import Resume from './Componets/Resume/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
