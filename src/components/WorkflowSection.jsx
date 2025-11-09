// src/components/WorkflowSection.jsx
import React from 'react';

const workflowSteps = [
  { id: 1, title: 'Requirement & Quote', description: 'We capture your exact printing or packaging needs and provide a competitive, transparent quotation.' },
  { id: 2, title: 'Design & Pre-Press', description: 'Our team handles the design finalization, proofing, and preparation of files for the highest quality print run.' },
  { id: 3, title: 'Production & QA', description: 'The materials are produced using precision offset machinery, followed by strict quality assurance checks.' },
  { id: 4, title: 'Delivery & Feedback', description: 'Rapid dispatch and timely delivery to your location, followed by post-service support and feedback.' },
];

// Define the core background style object
const backgroundStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/workflow.jpg)`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: '#fff', 
  position: 'relative',
  padding: '80px 20px',
  zIndex: 1,
  overflow: 'hidden',
};

// 1. Component to split and animate the main title (from previous steps)
const AnimatedTitle = ({ text }) => {
  const words = text.split(' ');

  return (
    <h2 className="section-title animated-title">
      {words.map((word, index) => (
        <span
          key={index}
          className="jump-word" 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {word}
          {/* Add a space after the word, except for the last one */}
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </h2>
  );
};

// 2. New component/function to split and animate the description text
const AnimatedText = ({ text, baseDelay }) => {
  const words = text.split(' ');

  return (
    <p className="animated-description">
      {words.map((word, index) => (
        <span
          key={index}
          className="jump-word-desc" // Unique class for description words
          // Stagger animation based on word index and an optional base delay (for sequential steps)
          style={{ animationDelay: `${baseDelay + (index * 0.05)}s` }}
        >
          {word}
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </p>
  );
};


const WorkflowSection = () => {
  return (
    <section 
      id="workflow" 
      className="workflow-section" 
      style={backgroundStyle} 
    >
      {/* Overlay element for better text readability */}
      <div className="workflow-overlay"></div> 
      
      {/* Animated Title */}
      <AnimatedTitle text="Our Efficient Workflow" />
      
      <p className="section-subtitle">
        A four-step process designed for speed, accuracy, and client satisfaction.
      </p>

      <div className="workflow-steps">
        {workflowSteps.map((step, stepIndex) => (
          <div key={step.id} className="workflow-step">
            <div className="step-number">{step.id}</div>
            <h4>{step.title}</h4>
            {/* Applied AnimatedText to the description */}
            <AnimatedText 
                text={step.description} 
                baseDelay={0.5 + (stepIndex * 0.4)} // Sequential delay for each step's description start
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowSection;