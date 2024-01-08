//this is the home page
"use client"
import './slideshow.css';
import React, { useState, useEffect } from 'react';

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [currentSlide, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="arrow left" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="arrow right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
