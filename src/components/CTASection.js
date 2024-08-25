// src/components/CTASection.js
import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Get Started?</h2>
        <p>Join us and start earning by driving with MyDrive today!</p>
        <button className="cta-button">Sign Up Now</button>
      </div>
    </section>
  );
};

export default CTASection;
