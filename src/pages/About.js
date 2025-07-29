import React from 'react';
import { Helmet } from 'react-helmet';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <Helmet>
        <title>Guided by charitable principles, we honor the memory of two remarkable Women.</title>
      </Helmet>
      <div className="about-content">
        <div className="about-hero">
          <div className="container">
            <h2 className="about-title">Guided by charitable principles, we honor the memory of two remarkable Women.</h2>
          </div>
        </div>
        <div className="about-section">
          <div className="container">
            <div className="about-card-grid">
              <div className="about-card">
                <img src="/external/Ma_Alu.jpg" alt="Ma_Alu" className="about-card-img" />
                <div>
                  <strong>Ma Alu Elizabeth Nvenge (1955-2022)</strong><br />
                  Mother of 3 Children<br />
                  Died of heart Attack
                </div>
              </div>
              <div className="about-card">
                <img src="/external/Ma_Theresa.jpg" alt="Ma_Theresa" className="about-card-img" />
                <div>
                  <strong>Ma Theresa Nvenge (1934-2016)</strong><br />
                  Mother of 12 Children<br />
                  Died of complications of Memory loss
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Start */}
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/external/placeholderimage8203-333q-300h.png" alt="Eric Nvenge" className="member-image" />
              <h3>Eric Nvenge</h3>
              <p>
                Founder of Ma AluTheresia Memory Rescue and Glitter of Hope Health Inc., brings a strong background in pharmacy and community health. With a Bachelor of Pharmacy and multiple certifications in pharmacy compounding, clinical research, and disability services, Eric has a strong background in pharmacy and volunteering and engaging with an individual and a family friend James Ivey, 92 in memory building activities for over two years. He is committed to supporting individuals and families affected by memory loss and cardiovascular issues through community-based initiatives.
              </p>
            </div>
            <div className="team-member">
              <img src="/external/placeholderimage8203-333q-300h.png" alt="Michel Balla" className="member-image" />
              <h3>Michel Balla</h3>
              <p>
                A dedicated board member of Ma AluTheresia Memory Rescue and Glitter of Hope Health Inc. With over 5 years of experience supporting individuals with developmental disabilities, he holds certifications in medication management, clinical research, and IT. Michel is passionate about promoting cognitive health and applies creative strategies to help individuals with memory loss, reflecting his deep commitment to improving lives.
              </p>
            </div>
            <div className="team-member">
              <img src="/external/placeholderimage8203-333q-300h.png" alt="Sugar Ebere Raymond" className="member-image" />
              <h3>Sugar Ebere Raymond</h3>
              <p>
                Member of the foundation, holds a Master’s degree in Information Technology from the University of Cincinnati. With a background in pharmacy and experience as a Clinical Research Associate, he bridges healthcare and technology to develop innovative solutions that support individuals with memory loss and cognitive challenges. His multidisciplinary expertise drives the organization's mission to improve health outcomes through research, technology, and community engagement.
              </p>
            </div>
          </div>
        </div>
        {/* Team Section End */}
      </div>
    </div>
  );
};

export default About; 