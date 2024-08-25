// src/components/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-item">
            <h3>Reliable Income</h3>
            <p>Earn a steady income with consistent delivery requests.</p>
          </div>
          <div className="feature-item">
            <h3>Flexible Schedule</h3>
            <p>Choose your working hours and balance your personal life.</p>
          </div>
          <div className="feature-item">
            <h3>Support</h3>
            <p>Access our dedicated support team whenever you need assistance.</p>
          </div>
          <div className="feature-item">
            <h3>Growth Opportunities</h3>
            <p>Advance your career with regular training and development programs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
