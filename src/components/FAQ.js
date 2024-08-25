// src/components/FAQ.js
import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2>Got Questions? We’ve Got Answers!</h2>
        <div className="faq">
          <h3>How do I sign up?</h3>
          <p>You can sign up by clicking on the "Sign Up Now" button and filling out the registration form.</p>

          <h3>What are the requirements?</h3>
          <p>You need to have a valid driver’s license, a clean driving record, and a vehicle in good condition.</p>

          <h3>How much can I earn?</h3>
          <p>Earnings depend on the number of rides you complete. There’s no limit!</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
