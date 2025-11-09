// src/components/ServicesSection.jsx
import React, { useState, useEffect } from 'react';


// Updated data structure with images
export const servicesData = [
  {
    image: 'pic01.jpg',
    title: 'Printing Technologies',
    description: 'State-of-the-art equipment for all your printing needs',
    features: [
      'Digital Printing - Rapid, personalized short runs',
      'Offset Printing - Cost-effective high-volume',
      'Large-Format - Signs, banners, displays',
    ],
  },
  {
    image: 'pic02.jpg',
    title: 'Finishing & Bindery',
    description: 'Professional finishing services to enhance your prints',
    features: ['Lamination & Folding', 'Binding (Coil, Perfect)', 'Foil Stamping & Embossing', 'Spot UV Coating'],
  },
  {
    image: 'pic03.jpg',
    title: 'Web-to-Print Portal',
    description: '24/7 online ordering and design submission',
    features: ['Online ordering anytime', 'Easy design submission', 'Template customization', 'Instant quotes'],
  },
  {
    image: 'pic04.jpg',
    title: 'Pre-press Services',
    description: 'Expert artwork checking for perfect results',
    features: ['File validation & optimization', 'Color correction', 'Resolution checking', 'Print-ready preparation'],
  },
  {
    image: 'pic05.jpg',
    title: 'Order Management',
    description: 'Comprehensive tracking and inventory control',
    features: ['Real-time job tracking', 'Material inventory management', 'Production scheduling', 'Customer notifications'],
  },
  {
    image: 'pic01.jpg',
    title: 'Fulfillment & Delivery',
    description: 'Transparent status updates from start to finish',
    features: ['Order status updates', 'Quality checking', 'Secure packaging', 'Fast delivery options'],
  },
];

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgroundImages = ['picture01.jpg', 'picture02.jpg', 'picture03.jpg', 'picture04.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="services-section">
      {/* Background Slider */}
      <div className="slider-container">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
          >
            <img
              src={`/${image}`}
              alt={`Background ${index + 1}`}
              className="slide-image"
            />
          </div>
        ))}
        <div className="overlay"></div>
      </div>

      {/* Slider Indicators */}
      <div className="indicators">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="content-wrapper">
        <h2 className="section-title">Our Comprehensive Services</h2>
        <p className="section-subtitle">
          Delivering end-to-end solutions from design to delivery, all in one place.
        </p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-card jumping-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--jump-delay': `${index * 0.3}s`
              }}
            >
              <div className="service-image-wrapper">
                <img 
                  src={`/${service.image}`}
                  alt={service.title}
                  className="service-image jumping-image"
                />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;