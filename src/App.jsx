// src/App.jsx
import React, { useState } from 'react';
import './App.css'; 

// Components for the Home Page
import Background from './components/Background';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // This now includes the stats!

// REMOVED: import StatsSection from './components/StatsSection'; // Delete this line
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import WorkflowSection from './components/WorkflowSection';
import ContactSection from './components/ContactSection'; 
import Footer from './components/Footer';

// Component for the About Us Page
import AboutPage from './components/AboutPage';


// FIX: 'stats' is now included in the HeroSection and doesn't need a separate entry.
// We remove 'stats' from HOME_SECTIONS, or we could keep it if you link directly to the <section id="stats"> inside the HeroSection.
const HOME_SECTIONS = ['home', 'services', 'products', 'workflow', 'contact'];

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (pageOrSection) => {
    setCurrentPage(pageOrSection);
    
    if (HOME_SECTIONS.includes(pageOrSection) && pageOrSection !== 'home') {
        setTimeout(() => {
            const element = document.getElementById(pageOrSection);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    } else {
        window.scrollTo(0, 0); 
    }
  };

  const renderHomePage = () => (
    <>
      {/* RENDER HeroSection only once, passing the 'home' ID to the main div */}
      <HeroSection id="home" /> 
      
      {/* REMOVED: <StatsSection id="stats" /> */}
      
      <ServicesSection id="services" />
      <ProductsSection id="products" />
      <WorkflowSection id="workflow" />
      <ContactSection id="contact" /> 
    </>
  );

  const isHomePageContent = HOME_SECTIONS.includes(currentPage);

  return (
    <>
      <Background />

      <Navbar 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
      />
      
      <main>
        {isHomePageContent && renderHomePage()}
        
        {currentPage === 'about' && <AboutPage />}
      </main>

      <Footer />
    </>
  );
}

export default App;