"use client"
import './slideshow.css'
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
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="slide"
            />
          ))}
        </div>
      </div>
      <div className="controls">
        <button className="arrow left" onClick={prevSlide}>
          <span>&#8249;</span>
        </button>
        <button className="arrow right" onClick={nextSlide}>
          <span>&#8250;</span>
        </button>
      </div>
    </div>
  );
};

export default SlideShow;