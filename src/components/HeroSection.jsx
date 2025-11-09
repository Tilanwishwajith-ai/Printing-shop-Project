import React, { useState, useEffect } from 'react';

// Removed: import { ArrowRight, Download } from 'lucide-react'; 

// Stats data defined locally and integrated into this component
const statsData = [
  { number: '4+', label: 'YEARS OF OPERATION' },
  { number: '100+', label: 'HAPPY CLIENTS SERVED' },
  { number: '99%', label: 'ON-TIME DELIVERY RATE' },
  { number: '500+', label: 'PROJECTS COMPLETED' },
];

const HeroSection = ({ id }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [particles, setParticles] = useState([]);
    
    const images = [
        '/jpg1.jpg', '/jpg2.jpg', '/jpg3.jpg', '/jpg4.jpg', '/jpg5.jpg'
    ];

    const createParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 30; i++) {
            newParticles.push({
                id: Date.now() + i,
                x: 50,
                y: 50,
                angle: (Math.PI * 2 * i) / 30,
                speed: 2 + Math.random() * 3,
                size: 5 + Math.random() * 10,
                color: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'][Math.floor(Math.random() * 5)]
            });
        }
        return newParticles;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setParticles(createParticles());
            
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
            }, 300);

            setTimeout(() => {
                setIsTransitioning(false);
                setParticles([]);
            }, 1500);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index) => {
        if (index !== currentImage) {
            setIsTransitioning(true);
            setParticles(createParticles());
            
            setTimeout(() => {
                setCurrentImage(index);
            }, 300);

            setTimeout(() => {
                setIsTransitioning(false);
                setParticles([]);
            }, 1500);
        }
    };

    // Inline SVG components to replace external dependencies
    const ArrowRightIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );

    const DownloadIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '10px' }}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" x2="12" y1="15" y2="3"/>
        </svg>
    );


    return (
        <div id={id} className="hero"> 
            {/* Background Image Slider */}
            <div className="hero-slider">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentImage ? 'active' : ''} ${
                            isTransitioning && index === currentImage ? 'blast-in' : ''
                        } ${
                            index === (currentImage - 1 + images.length) % images.length ? 'prev' : ''
                        }`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
            </div>

            {/* Particle, Overlay, Shapes, and Rings JSX */}
            {particles.length > 0 && (
                <div className="blast-particles">
                    {particles.map((particle) => (
                        <div
                            key={particle.id}
                            className="particle"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                backgroundColor: particle.color,
                                '--angle': `${particle.angle}rad`,
                                '--speed': particle.speed,
                                animation: `particleBlast 1.5s ease-out forwards`
                            }}
                        />
                    ))}
                </div>
            )}
            
            <div className={`hero-overlay ${isTransitioning ? 'pulse' : ''}`}></div>
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="shape shape3"></div>
            <div className={`energy-ring ${isTransitioning ? 'active' : ''}`}></div>
            <div className={`energy-ring delay-1 ${isTransitioning ? 'active' : ''}`}></div>
            <div className={`energy-ring delay-2 ${isTransitioning ? 'active' : ''}`}></div>

            {/* NEW CONTAINER FOR MAIN CONTENT: Ensures everything sits above the stats bar */}
            <div className="hero-main-content"> 
                <div className="hero-content">
                    {/* Text Content */}
                    <h1 className={isTransitioning ? 'shake' : ''}>
                        Dcms Packaging Solutions Pvt Ltd <br/>
                    </h1>
                    <p className={`subtitle ${isTransitioning ? 'shake' : ''}`}>
                        Uncompromised commitment to customer satisfaction. 
                        Delivering high-quality offset and flexible packaging since 2020.
                    </p>
                    
                    {/* Buttons */}
                    <div className="hero-buttons">
                        <a href="#contact" className="hero-btn hero-btn-primary">
                            Get a Quote <ArrowRightIcon />
                        </a>
                        <a href="/brochure.pdf" download className="hero-btn hero-btn-secondary">
                            Download Brochure <DownloadIcon />
                        </a>
                    </div>
                </div>

                {/* Image Navigation Dots: Moved the dots outside hero-content but inside the new wrapper 
                    to ensure they are positioned relative to the main hero area. 
                */}
                <div className="hero-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentImage ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* INTEGRATED STATS SECTION - Now outside the main content wrapper */}
            <div className="hero-stats-wrapper">
                <section id="stats" className="stats-section">
                    <div className="stats-container">
                        {statsData.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HeroSection;
