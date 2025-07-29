import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <div className="programs">
      <div className="programs-content">
        <div className="programs-section">
          <div className="container">
            <h2>Programs And Services</h2>
            <div className="program-card-grid">
              <div className="program-card">
                <img src="/external/exercising.jpeg" alt="exercising" className="program-card-img" />
                <h3>Our Vision and Mission</h3>
                <p>
                  <strong>Vision:</strong> To use our resources to promote memory and heart health through non-profit, community-centered activities that improve quality of life.<br /><br />
                  <strong>Mission:</strong> To provide engaging, non-pharmacological activities that help people keep their minds active, build strong social connections, and support healthy lifestyles to prevent memory decline and heart disease.
                </p>
              </div>
              <div className="program-card">
                <img src="/external/games.jpeg" alt="games" className="program-card-img" />
                <h3>Games And Activities</h3>
                <p>
                  We provide a variety of games and activities like riding a fixed exercise bike, playing cards, balloon volleyball, Peg puzzle, coloring together, walk together, dancing to the music from their past as way to rebuild memory to help recall emotions, improve physical function, and keep our elderly individuals engaged and active.
                </p>
              </div>
              <div className="program-card">
                <img src="/external/draft-playing.jpg" alt="draft-playing" className="program-card-img" />
                <h3>Our Approach: Holistic and Non-Pharmacological Approach</h3>
                <p>
                  <strong>Holistic Approach:</strong> We consider the physical, emotional, mental, and social well-being of each individual, engaging them in Emotional Support, Counseling, Physical Activities, Social Engagement, and Community Building.<br /><br />
                  <strong>Non-Pharmacological Approach:</strong> We utilize methods that don't rely on medication to prevent, treat, or manage health conditions, such as cognitive behavioral therapy.
                </p>
              </div>
            </div>
            <div className="goals-objectives-section-green">
              <div className="goals-objectives-row">
                <div className="goals-objectives-text">
                  <h2 className="goals-objectives-title">Goals And Objectives</h2>
                  <ul className="goals-objectives-list">
                    <li>Provide education and support for individuals and families affected by memory loss and cognitive impairment.</li>
                    <li>Foster community engagement, social interaction, and support networks for individuals and families affected by memory loss.</li>
                    <li>Address cardiovascular health and well-being through education and preventive programs.</li>
                  </ul>
                </div>
                <div className="goals-objectives-image">
                  <img src="/external/bible-reading.jpg" alt="Goals and Objectives" className="goals-objectives-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs; 