import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import HeroSection from './Componets/Hero_Section/HeroSection';
import About from './Componets/About_page/About';
// import Footer from './Componets/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <About/>

    
    {/* <Footer/> */}
  
    </div>
  );
}

export default App;
