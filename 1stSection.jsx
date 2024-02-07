"use client"
import React from 'react';
import './1stSection.css';

const openGoogle = () => {
  window.open('http://www.google.com/', '_blank');
};

const PictureSection = () => {
  return (
    <section className="picture-section">
      <div className="container">
        <h1 className="header">Explore with your pals!</h1>
        <p className="text">Scroll down and explore your next destination</p>
      </div>
      <div className="picture-container">
        <div className="picture-item" onClick={openGoogle}>
          <img src="pic1.jpg" alt="Picture 1" />
          <span className="picture-label">INDONESIA UNLEASHED: EXPLORING THE ARCHIPELAGO</span>
        </div>
        <div className="picture-item">
          <img src="pic2.jpg" alt="Picture 2" />
          <span className="picture-label">EXPLORE THE WONDERLAND, CALIFORNIA</span>
        </div>
        <div className="picture-item">
          <img src="pic3.jpg" alt="Picture 3" />
          <span className="picture-label">EXPLORE DUBAI: UNVEILING THE GEM OF THE MIDDLE EAST</span>
        </div>
      </div>
    </section>
  );
};

export default PictureSection;
