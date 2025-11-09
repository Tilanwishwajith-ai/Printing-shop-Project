// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = ({ currentPage, navigateTo }) => { 
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Define all links with their target page state and section ID
  const navLinksData = [
    { id: 'home', label: 'Home', page: 'home', anchor: 'home' },
    { id: 'services', label: 'Services', page: 'home', anchor: 'services' },
    { id: 'products', label: 'Products', page: 'home', anchor: 'products' },
    { id: 'workflow', label: 'Workflow', page: 'home', anchor: 'workflow' },
    { id: 'contact', label: 'Contact', page: 'home', anchor: 'contact' },
    { id: 'about', label: 'About Us', page: 'about', anchor: 'about' },
  ];

  // Track which section is currently in view (for home page sections)
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'services', 'products', 'workflow', 'contact'];
      let current = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sectionId;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (targetPage, targetAnchorId) => {
    // Check if we need to change the main page state
    const needsPageChange = targetPage !== currentPage;

    if (needsPageChange) {
        navigateTo(targetPage);
    }
    
    // Handle scrolling for home page sections
    if (targetPage === 'home' && targetAnchorId) {
        setTimeout(() => {
            const element = document.getElementById(targetAnchorId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveSection(targetAnchorId);
            } else if (targetAnchorId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
            }
        }, needsPageChange ? 200 : 0);
    } else if (targetPage === 'about') {
         navigateTo('about');
         window.scrollTo({ top: 0, behavior: 'smooth' });
         setActiveSection('about');
    }
    
    // Close the mobile menu
    setIsOpen(false); 
  };

  // Improved function to determine active class
  const getActiveClass = (link) => {
      // If we're on the about page, only highlight "About Us"
      if (currentPage === 'about') {
          return link.id === 'about' ? 'nav-active' : '';
      }
      
      // If we're on the home page, highlight based on active section
      if (currentPage === 'home') {
          return link.id === activeSection ? 'nav-active' : '';
      }
      
      return '';
  };

  return (
    <nav>
      <div className="nav-container">
        
        {/* LOGO IMPLEMENTATION */}
        <div 
            className="logo" 
            onClick={() => handleNavLinkClick('home', 'home')}
            style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.5rem', color: '#007bff' }}
        >
          DCMS Solutions
        </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation menu">
          ☰
        </button>
        
        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
          
          {navLinksData.map((link) => (
              <li key={link.id}>
                  <a 
                      href={`#${link.anchor}`} 
                      onClick={(e) => {
                          e.preventDefault();
                          handleNavLinkClick(link.page, link.anchor);
                      }}
                      className={getActiveClass(link)}
                  >
                      {link.label}
                  </a>
              </li>
          ))}
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;