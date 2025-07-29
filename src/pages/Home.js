import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Charitable Support for Memory loss, Cognitive impairment and cardiovascular health</title>
      </Helmet>
      <div className="home-content" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', minHeight: '70vh', gap: 48, background: '#3A57B4', borderRadius: 0, boxShadow: 'none', padding: '3.5rem 0', marginTop: 0, width: '100vw', maxWidth: '100vw'}}>
        <div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: 0, margin: '0 auto', height: '100%'}}>
          <div style={{fontSize: '2.2rem', fontWeight: 700, color: '#fff', marginBottom: 24, lineHeight: 1.1, fontFamily: 'Inter, Arial, Helvetica, sans-serif', textAlign: 'center'}}>
            Welcome to Ma Alu Theresia Memory Rescue and Glitter of Hope Health Inc.
          </div>
          <div style={{color: '#fff', fontSize: '1.1rem', maxWidth: 520, textAlign: 'center', marginBottom: 0}}>
            a non-profit organization dedicated to supporting individuals and families affected by memory loss, related cognitive impairment, and cardiovascular health issues through charitable initiatives and community-driven programs. We believe that everyone deserves to live with dignity and purpose, regardless of their health challenges. Our mission is to provide innovative programs, education, support, and resources to address these challenges using holistic, non-pharmacological approaches.
            <br /><br />
            We Use innovative, holistic, and non-pharmacological approaches to achieve our mission.
            <br /><br />
            <b>Join Us</b><br />
            We're committed to making a difference in the lives of individuals and families affected by memory loss, cognitive impairment, and cardiovascular health issues. Join us in our mission to provide support, resources, and community engagement. Together, we can enhance the quality of life for those affected and create a more compassionate and supportive community.
          </div>
        </div>
        <div style={{position: 'relative', width: 420, height: 420, display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
          <img
            src="/external/alzball.jpg"
            alt="Team"
            style={{width: 400, height: 400, objectFit: 'cover', borderRadius: '50%', border: '8px solid #fff', boxShadow: '0 4px 32px rgba(0,0,0,0.12)'}}
          />
          {/* Decorative swoosh/ellipse (optional) */}
          <svg width="420" height="420" style={{position: 'absolute', top: 0, left: 0, pointerEvents: 'none'}}>
            <ellipse cx="210" cy="210" rx="200" ry="200" fill="none" stroke="#fff" strokeWidth="4" />
            <ellipse cx="210" cy="210" rx="180" ry="180" fill="none" stroke="#B8B8B8" strokeWidth="2" strokeDasharray="12 8" />
          </svg>
        </div>
      </div>
      <div style={{width: 420, margin: '48px auto 0 auto', color: '#fff', fontSize: '0.95rem', textAlign: 'center', fontStyle: 'italic', opacity: 0.85, maxWidth: 420, letterSpacing: 0.1, lineHeight: 1.5}}>
        The image above is a demonstration of how Resident Agent Eric Nvenge of Ma Alu Theresia Memory Rescue and Glitter of Hope Health Inc., a dedicated friend, is playing balloon volleyball with his family friend James Ivey, age 93, who has been living with memory impairment and the effects of a stroke.
      </div>
    </div>
  );
};

export default Home; 