import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import HeroSection from './Componets/Hero_Section/HeroSection';
import About from './Componets/About_page/About';
import Service from './Componets/Service_page/Service';
import Projects from './Componets/Projects_page/Projects';
import Contact from './Componets/Contact_page/Contact';
import Footer from './Componets/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>

    
    <Footer/>
  
    </div>
  );
}

export default App;
