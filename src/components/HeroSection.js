import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  return (
    <header className="hero-section">
      <main className="container">
        <div className="hero-content">
        <img src={heroImage} alt="Hero" />

          <div className="hero-text">
            <h2>Welcome to MyFastX <span className="partner">Partner</span></h2>
            <p>Quick & Reliable Delivery and Logistics Solution</p>
            <p>At MyFastX, we are revolutionizing the delivery and logistics industry by providing swift, dependable services to our clients.</p>
            <button className="cta-button">Register now for just Rs. 999!</button>
          </div>
        </div>
      </main>
    </header>
  );
};

export default HeroSection;