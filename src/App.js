// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <Steps />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
