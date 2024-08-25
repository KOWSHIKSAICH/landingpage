import React from 'react';
import './Steps.css';
import heroImage from '../assets/hero-image.png'; // Corrected import

const Steps = () => {
  return (
    <section className="steps-section" id="steps">
      <div className="container">
        <div className="steps-content">
          <div className="steps-text">
            <h2>Simple Steps to Get Started</h2>
            <div className="step">
              <div className="step-icon">🔍</div>
              <div className="step-details">
                <h3>Register Online</h3>
                <p>Fill out our easy online application form and pay the registration fee of Rs. 999.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon">✔️</div>
              <div className="step-details">
                <h3>Get Verified</h3>
                <p>Complete the verification process to ensure you meet our standards.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon">🚗</div>
              <div className="step-details">
                <h3>Start Driving</h3>
                <p>Once approved, start accepting delivery requests and earn money.</p>
              </div>
            </div>
          </div>
          <div className="steps-image">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
