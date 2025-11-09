// src/components/AboutPage.jsx
import React from 'react';

// Placeholder data structure for the team (no change needed here)
const teamData = {
  manager: {
    name: " MR.Dinesh wanigasooriya",
    role: "Managing Director",
    bio: "Mr.dinesh wanigasooriya leads DCMS with a clear vision for operational excellence and a dedication to customer-first values. His 25+ years in the packaging industry ensure stability and forward-thinking strategies.",
  },
  staff: [
    { name: "S. Kumara", role: "Production Lead", photo: "Staff Photo Placeholder" },
    { name: "K. Priyadarshani", role: "Quality Assurance", photo: "Staff Photo Placeholder" },
    { name: "D. Seneviratne", role: "Logistics Coordinator", photo: "Staff Photo Placeholder" },
  ]
};

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-section">
        
        {/* --- Overview Section --- */}
        <section className="about-overview">
          <h2 className="section-title">Overview</h2>
          <p className="section-subtitle">
            A comprehensive look at DCMS Packaging Solutions (Pvt)Ltd.
          </p>

          <div className="overview-content">
            {/* Visual placeholder div for image */}
            <div className="image-placeholder">
                {/* Use a placeholder if you don't have an overview image */}
                [OVERVIEW IMAGE PLACEHOLDER]
            </div>
            
            <p>
              DCMS Packaging Solutions (Pvt)Ltd, founded in **2020**, operates in the Offset Printing and Flexible Packaging industry, delivering high-quality printing solutions to a variety of clients. 
              Our product range includes **POSM materials, stickers, bill books, leaflets, and brochures**, with additional offerings of **unprinted bags** tailored for tea packaging within the flexible packaging sector. 
              What sets DCMS apart is our strong focus on customer service, characterized by **quick response times**, the **shortest lead times**, competitive pricing, and timely deliveries. 
              We are committed to maintaining high standards of quality and ensuring customer satisfaction, which is reflected in our company tagline: **"Uncompromised commitment to customer satisfaction."**
            </p>
          </div>
        </section>

        <hr style={{ margin: '60px auto', maxWidth: '80%', border: '1px solid rgba(0, 123, 255, 0.3)' }} />

        {/* --- Leadership Section (Manager) --- */}
        <section className="manager-section">
          <h2 className="section-title">Our Leadership</h2>
          <p className="section-subtitle">
            Guiding our commitment to quality and service.
          </p>

          <div className="manager-card">
            {/* Visual placeholder div for manager photo - CORRECTED PATH */}
            <div className="image-placeholder team-placeholder">
              {/* 🛑 CORRECTION: Changed src from /image01.jpg to /photo01.jpg to match your public folder. */}
              <img 
                src="/photo01.jpg" 
                alt={`${teamData.manager.name}'s Photo`} 
                className="team-photo"
              />
            </div>
            <h3>{teamData.manager.name}</h3>
            <p className="role">{teamData.manager.role}</p>
            <p>{teamData.manager.bio}</p>
          </div>
        </section>

        <hr style={{ margin: '60px auto', maxWidth: '80%', border: '1px solid rgba(0, 123, 255, 0.3)' }} />

        {/* --- Core Team Section (Staff) --- */}
        <section className="staff-section">
          <h2 className="section-title">The Core Team</h2>
          <p className="section-subtitle">
            Dedicated professionals delivering excellence every day.
          </p>
          
          <div className="staff-grid">
            {teamData.staff.map((member, index) => (
              <div key={index} className="staff-member">
                {/* Visual placeholder div for staff photo */}
                <div className="image-placeholder team-placeholder">
                    [STAFF PHOTO {index + 1}]
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default AboutPage;