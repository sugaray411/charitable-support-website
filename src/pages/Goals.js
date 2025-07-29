import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import './Goals.css';

const Goals = () => {
  return (
    <div className="goals">
      <Helmet>
        <title>Goals & Objectives - Charitable Support</title>
        <meta name="description" content="Our mission, vision, and objectives at Charitable Support" />
      </Helmet>
      <Navbar />
      <div className="goals-content">
        <div className="goals-hero">
          <div className="container">
            <h1>Our Goals & Objectives</h1>
            <p className="subtitle">Building a better future through sustainable development</p>
          </div>
        </div>

        <div className="goals-section">
          <div className="container">
            <div className="goals-grid">
              <div className="goals-info">
                <h2>Our Mission</h2>
                <p>To empower communities through sustainable development initiatives, education, and healthcare support, creating lasting positive change in the lives of those we serve.</p>
                
                <h2>Our Vision</h2>
                <p>A world where every individual has access to basic necessities, education, and opportunities for growth, regardless of their circumstances.</p>

                <h2>Core Objectives</h2>
                <div className="goals-card-grid">
                  <div className="goals-card">
                    <img src="/external/exercising.jpeg" alt="Education" className="goals-card-img" />
                    <h3>Education</h3>
                    <p>Provide quality education and learning resources to underprivileged children and youth.</p>
                  </div>
                  <div className="goals-card">
                    <img src="/external/games.jpeg" alt="Healthcare" className="goals-card-img" />
                    <h3>Healthcare</h3>
                    <p>Improve access to healthcare services and promote health awareness in communities.</p>
                  </div>
                  <div className="goals-card">
                    <img src="/external/draft-playing.jpg" alt="Sustainable Development" className="goals-card-img" />
                    <h3>Sustainable Development</h3>
                    <p>Implement sustainable development projects that create long-term positive impact.</p>
                  </div>
                  <div className="goals-card">
                    <img src="/external/bible-reading.jpg" alt="Community Empowerment" className="goals-card-img" />
                    <h3>Community Empowerment</h3>
                    <p>Empower communities through skill development and capacity building programs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="impact-section">
          <div className="container">
            <h2>Our Impact</h2>
            <div className="impact-grid">
              <div className="impact-item">
                <h3>1000+</h3>
                <p>Children Educated</p>
              </div>
              <div className="impact-item">
                <h3>500+</h3>
                <p>Families Supported</p>
              </div>
              <div className="impact-item">
                <h3>50+</h3>
                <p>Communities Served</p>
              </div>
              <div className="impact-item">
                <h3>100+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals; 