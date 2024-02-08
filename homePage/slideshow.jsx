"use client"
import './slideshow.css'
import React, { useState, useEffect } from 'react';

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ['pic1.jpg', 'pic2.jpg', 'brazil-main.jpg'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); //changes to next pic in 3 seconds

    return () => clearTimeout(timer); //resets timer
  }, [currentSlide, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  function buttonClicked() {
    return (
      <div className="controls">
        <button onClick={prevSlide}>
          <span>&#8249;</span>
        </button>
        <button onClick={nextSlide}>
          <span>&#8250;</span>
        </button>
      </div>
    )
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <div
          className="slides"

          //allows the image to slide
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >

          {images.map((image, index) => (
            <img
              src={image}
              className="slide"
            />
          ))}
        </div>
      </div>
      {buttonClicked()}
    </div>
  );
}

export default SlideShow;